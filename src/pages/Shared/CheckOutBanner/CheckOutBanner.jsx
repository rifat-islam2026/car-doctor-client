import checkout from '../../../assets/images/checkout/checkout.png';

function CheckOutBanner({text}) {
  return (
    <div className="relative mb-10">
      <div>
        <img src={checkout} alt="Checkout" className="" />
      </div>
      <h1 className="lg:text-4xl text-2xl font-bold text-white absolute top-1/2 left-16">
        {text}
      </h1>
    </div>
  );
}

export default CheckOutBanner
