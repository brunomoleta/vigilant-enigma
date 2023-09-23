import Form from "../Form/Form";

function BmiCalculator() {
  return (
    <>
      <header>
        <div>
          {/* <h1>Body Mass Index Calculator</h1> */}
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <Form />
      </header>
    </>
  );
}

export default BmiCalculator;
