// src/components/BuyMeACoffeeIframe.jsx

const BuyMeACoffee = () => {
  const src = 'https://www.buymeacoffee.com/widget/page/BarryDaemi?description=Support%20me%20on%20Buy%20me%20a%20coffee!&color=%235F7FFF';

  return (
    <iframe
      src={src}
      title="Buy Me A Coffee Widget"
      style={{ border: 'none', width: '300px', height: '500px' }} // Adjust width/height as needed
      allowTransparency="true"
    />
  );
};

export default BuyMeACoffee;