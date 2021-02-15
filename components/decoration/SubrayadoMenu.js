function SubrayadoMenu(props) {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        position: "absolute",
        bottom: props.bottom,
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
}

export default SubrayadoMenu;
