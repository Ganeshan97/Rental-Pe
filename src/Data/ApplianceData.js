import washingMachine from "../Assets/WM_Card.JPG";
import tv from "../Assets/TV_Card.jpg";
import fridge from "../Assets/Fridge_Card.jpg";
import microwave from "../Assets/Microwave_Card.jpg";
import ac from "../Assets/AC_Card.jpg";
import mixer from "../Assets/Mixer_Card.jpg";
import toaster from "../Assets/Toaster_Card.JPG";
import vaccum from "../Assets/Vaccum_Card.jpg";

const ApplianceData = [
  {
    id: 9,
    image: washingMachine,
    title: "LG 9.0 Kg Fully-Automatic Front Loading Washing Machine",
    price: "₹219/mo",
    discount: "39%",
    about: {
      1: "Warranty: 2 Years Standard Warranty; 10 Years Warranty on Inverter Motor",
      2: "HYGIENIC CARE: Electrolux washing machine not only cleans your clothes but also finishes the wash cycle with a soft spray of vapour at 40°C that removes up to 99.9% of allergens and germs.",
      3: "ECOINVERTER MOTOR FUNCTION: Complete your laundry without disturbing anyone and at any time.",
      4: "QUICK 15 WASHING CYCLES: This 15-minutes washing cycle is suitable for a small number of clothes.",
      5: "VARIABLE TEMPERATURE FEATURE- Electrolux UltraCare 300 washing machine gives you the flexibility to adapt the cycle temperature depending on the type of fabric.",
      6: "PAUSE THE WASH CYCLE FUNCTION: This allows you to pause the wash cycle and add the missed items to the washing tub up to 15 minutes after the cycle begins.",
      7: "LARGE DOOR FOR EASY UNLOADING: It helps to easily load and unload the bulky or family-sized laundry.",
    },
  },
  {
    id: 10,
    image: tv,
    title:
      "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED SmartTV",
    price: "₹200/mo",
    discount: "19%",
    about: {
      1: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz ",
      2: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices ",
      3: "Sound : 20 Watts Output | Dolby Digital Plus",
      4: "Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
      5: "Display : LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design ",
      6: "Warranty Information: 1 year comprehensive warranty plus additional 1 years on panel by brand from date of invoice ",
      7: "Installation: TV Table stand is not included in the box with this model. customer may ask for Table Top Stand or Wall Mount which will be provided to the customer at the time of installation",
    },
  },
  {
    id: 11,
    image: fridge,
    title: "Godrej 236 L 2 Star Inverter Frost-Free Double Door Refrigerator",
    price: "₹400/mo",
    discount: "31%",
    about: {
      1: "The star rating changes are as per BEE guidelines on or before 1st Jan 2023",
      2: "Wi-Fi Side-by-Side Refrigerator with Inverter Compressor and Auto Defrost technology",
      3: "592 L capacity: Suitable for the daily requirements of a family with 5 or more members ",
      4: "QUICK 15 WASHING CYCLES: This 15-minutes washing cycle is suitable for a small number of clothes.",
      5: "Warranty: 1 year on Product | 10 years on Compressor ",
      6: "Miraie: Wireless Connectivity and Temperature Control | Smart Diagnostic Function with One Touch Service Request",
      7: "Special Features: Inverter Compressor | Fast Ice Function | Double Vegetable Box",
    },
  },
  {
    id: 12,
    image: microwave,
    title:
      "IFB 25 L Convection Microwave Oven (25SC4, Metallic Silver, Starter Kit)",
    price: "₹189/mo",
    discount: "15%",
    about: {
      1: "23L Capacity: Suitable for families with 3 to 4 members ;Power + Innovation 800 Watts of High Power",
      2: "360 Degree Heat Wrap: Advanced Heat Wave Ducts ensure even 360 degree distribution of heat for uniform, faster cooking",
      3: "Auto Cook 61 Menu: Access 61 pre-loaded menus ranging from starters to desserts",
      4: "Re-Heat & Defrost: Auto programmed reheat and defrost modes ensure even heating or defrosting of food",
      5: "Magic Grill: Dual power of top and back grill work to make food crispier outside and juicy inside",
      6: "Vapor Clean: Keep oven odor free and stain free with the touch of a button",
      7: "Compact Design: This countertop microwave with glass turntable is compact",
    },
  },
  {
    id: 13,
    image: ac,
    title:
      "1.5 Ton 3 Star Convertible 4 in 1 Cooling Inverter Split AC (Copper, Multi Sensors)",
    price: "₹587/mo",
    discount: "10%",
    about: {
      1: "Manufacturer Warranty: 1 Year Comprehensive | 4 years on PCB |9 years on Compressor| 5 years on Outdoor Unit",
      2: "Smart AC: Seamlessly adjust temperature, monitor status and change modes right from the AI",
      3: "Healthy Cooling: Equipped with the PM 0.1 Filter to provide dust free",
      4: "Wi-Fi Split AC with Twin Cool Inverter compressor: Variable Speed Inverter Compressor",
      5: "4 Way Horizontal and Vertical Swing ensures consistent cooling across the space",
      6: "Special Features: Smart AC- Wi-fi enabled, MirAie Mobile App enabled, work with Alexa and Hey Google",
      7: "Included in the box: 1 Indoor Unit, 1 Outdoor Unit, Remote Controller, Remote Controller Holder, 2 AAA Battery",
    },
  },
  {
    id: 14,
    image: mixer,
    title: "Rex 500W Mixer Grinder with Nutri-Pro Feature, 3 Jars, White",
    price: "₹299/mo",
    discount: "25%",
    about: {
      1: "Wattage: 500 W; Voltage: 220-240V ; Revolution: 20000",
      2: "No of Jars: 3; Jar Size: 1.20 Litre liquidizing jar, 0.8 Litre multi purpose jar, 0.3 Litre chutney jar",
      3: "Since your mixer grinder runs on a powerful motor, there will be some noise",
      4: "Multi-functional blade system. Elegant body design",
      5: "Easy grip jar handles",
      6: "Sturdy stainless steel jars for liquidizing , wet/dry grinding and chutney making",
      7: "Jar Material: Stainless Steel; Body Material: ABS; Cord Material: PVC; Blade Material: Stainless Steel; Speed Control: 3 speed control with incher for momentary operation ",
    },
  },
  {
    id: 15,
    image: toaster,
    title: "ATX 4 750-Watt Pop-up Toaster, 2-Slice Automatic Pop up Toaster",
    price: "₹199/mo",
    discount: "18%",
    about: {
      1: "America's number 1 small kitchen appliance brand with over 100 years innovation in hotels, restaurants, cafes and homes ",
      2: "Extra-wide slots accommodate thick breads and bagels",
      3: "3 toasting functions: defrost, reheat and cancel ",
      4: "Automatic shutoff - toaster shuts off at end of cycle, even if toast gets jammed",
      5: "Toast boost for safe and easy toast removal ",
      6: "East-to-grip shade selector",
      7: "Easy-clean slide-out crumb tray",
    },
  },
  {
    id: 16,
    image: vaccum,
    title: "Supervac 1600 Watts Powerful Suction,bagless Vacuum Cleaner ",
    price: "₹250/mo",
    discount: "35%",
    about: {
      1: "Cyclone System: Cyclone System helps in increasing the air flow in the dust tank which in turn separates dust from the air.",
      2: "Powerful Suction: Sure from Forbes Super Vac is powered with best in class 1600 Watts motor delivering powerful suction of 21 KPA",
      3: "Vario Power: The suction power can be controlled as per user's need with the help of the variable power control.",
      4: "Allows easy disposal of dirt & dust at the press of a button without dirtying hands ",
      5: "Auto Cord Winder: To protect the power cord from getting cut or damaged",
      6: "Range of Accessories: Super Vac comes with range of accessories for different cleaning needs.",
      7: "Post Purchase virtual Demo is provided on this product",
    },
  },
];

export default ApplianceData;
