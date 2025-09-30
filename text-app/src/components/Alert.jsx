export default function Alert() {
    var obj = { backgroundColor: "lightgreen", fontWeight: 5 } ;
  return (
    <>
      <div style={obj}>
        <h5 style={{ color: "darkgreen" }}>
          <strong>SUCCESS!!</strong>
        </h5>
      </div>
    </>
  );
}
