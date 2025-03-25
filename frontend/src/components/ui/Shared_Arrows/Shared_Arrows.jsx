import { components } from "@exports";

export const Shared_Arrows = ({ onNext, onPrev, isFirst, isLast, motionProps = {} }) => {
  const { Shared_Button: Button, Shared_Box: Box } = components;
  const arrow_left = (
    <svg
      className="arrows__button-arrow"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>arrow-left</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.73635 15.0364C8.38487 15.3879 7.81503 15.3879 7.46355 15.0364L2.06355 9.63644C1.71208 9.28497 1.71208 8.71512 2.06355 8.36365L7.46356 2.96365C7.81503 2.61218 8.38488 2.61218 8.73635 2.96365C9.08782 3.31512 9.08782 3.88497 8.73635 4.23644L4.87274 8.10005L15.3 8.10005C15.797 8.10005 16.2 8.50299 16.2 9.00005C16.2 9.4971 15.797 9.90005 15.3 9.90005L4.87274 9.90005L8.73635 13.7637C9.08782 14.1151 9.08782 14.685 8.73635 15.0364Z"
        fill="currentColor"
      />
    </svg>
  );
  const arrow_right = (
    <svg
      className="arrows__button-arrow"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>arrow-right</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.26365 15.0364C9.61513 15.3879 10.185 15.3879 10.5364 15.0364L15.9364 9.63644C16.2879 9.28497 16.2879 8.71512 15.9364 8.36365L10.5364 2.96365C10.185 2.61218 9.61512 2.61218 9.26365 2.96365C8.91218 3.31512 8.91218 3.88497 9.26365 4.23644L13.1273 8.10005L2.70005 8.10005C2.20299 8.10005 1.80005 8.50299 1.80005 9.00005C1.80005 9.4971 2.20299 9.90005 2.70005 9.90005L13.1273 9.90005L9.26365 13.7637C8.91218 14.1151 8.91218 14.685 9.26365 15.0364Z"
        fill="currentColor"
      />
    </svg>
  );

  const renderArrowButton = (direction, onClick, isDisabled) => {
    const isLeft = direction === "left";
    const arrowIcon = isLeft ? arrow_left : arrow_right;

    return (
      <Button
        type="button"
        className={`arrows__button ${isDisabled ? "button-arrow-disabled" : "button-arrow-active"}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {arrowIcon}
      </Button>
    );
  };

  return (
    <Box className="arrows" motionProps={{ ...motionProps }}>
      {renderArrowButton("left", onPrev, isFirst)}
      {renderArrowButton("right", onNext, isLast)}
    </Box>
  );
};
