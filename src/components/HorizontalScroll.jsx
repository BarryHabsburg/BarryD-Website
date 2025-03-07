function HorizontalScroll() {

    return(
    <>
    <div className="scroll-container">
      <div className="scroll-content">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="item">Item {i + 1}</div>
        ))}
      </div>
    </div>
    </>
);
}

export default HorizontalScroll;