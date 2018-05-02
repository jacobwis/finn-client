import * as React from 'react';

interface Props {
  onEndReached: () => void;
}

class InfiniteScroll extends React.Component<Props> {
  public Target: HTMLDivElement;

  public onIntersectionChange = (changes: IntersectionObserverEntry[]) => {
    const change = changes[0];
    if (change.isIntersecting) {
      this.props.onEndReached();
    }
  };

  public componentDidMount() {
    const observer = new IntersectionObserver(this.onIntersectionChange, {
      rootMargin: '0px 0px 500px 0px'
    });

    observer.observe(this.Target);
  }

  public render() {
    return (
      <>
        {this.props.children}
        <div ref={el => (this.Target = el)} />
      </>
    );
  }
}

export default InfiniteScroll;
