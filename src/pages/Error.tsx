import { useRouteError } from "react-router-dom";

interface RouteError extends Error {
  status?: number;
  statusText?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {error.status || 'Error'}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {error.statusText || 'An unexpected error occurred'}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {error.message || 'Please try again later.'}
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error;


// const randomCoordinates = [
//   { latitude: 5.1052, longitude: 7.3673 },
//   { latitude: 5.1040, longitude: 7.3660 },
//   { latitude: 5.1060, longitude: 7.3680 },
//   { latitude: 5.1035, longitude: 7.3655 },
//   { latitude: 5.1020, longitude: 7.3640 },
//   { latitude: 5.1075, longitude: 7.3700 },
//   { latitude: 5.1080, longitude: 7.3710 },
//   { latitude: 5.1090, longitude: 7.3720 },
//   { latitude: 5.1100, longitude: 7.3730 },
//   { latitude: 5.1110, longitude: 7.3740 },
//   { latitude: 5.1120, longitude: 7.3750 },
//   { latitude: 5.1130, longitude: 7.3760 },
//   { latitude: 5.1140, longitude: 7.3770 },
//   { latitude: 5.1150, longitude: 7.3780 },
//   { latitude: 5.1160, longitude: 7.3790 },
//   { latitude: 5.1170, longitude: 7.3800 },
//   { latitude: 5.1180, longitude: 7.3810 },
//   { latitude: 5.1190, longitude: 7.3820 },
//   { latitude: 5.1200, longitude: 7.3830 },
//   { latitude: 5.1210, longitude: 7.3840 },
//   { latitude: 5.1220, longitude: 7.3850 },
//   { latitude: 5.1230, longitude: 7.3860 },
//   { latitude: 5.1240, longitude: 7.3870 },
//   { latitude: 5.1250, longitude: 7.3880 },
//   { latitude: 5.1260, longitude: 7.3890 },
//   { latitude: 5.1270, longitude: 7.3900 },
//   { latitude: 5.1280, longitude: 7.3910 },
//   { latitude: 5.1290, longitude: 7.3920 },
//   { latitude: 5.1300, longitude: 7.3930 },
//   { latitude: 5.1310, longitude: 7.3940 },
//   { latitude: 5.1320, longitude: 7.3950 },
//   { latitude: 5.1330, longitude: 7.3960 },
//   { latitude: 5.1340, longitude: 7.3970 },
//   { latitude: 5.1350, longitude: 7.3980 },
//   { latitude: 5.1360, longitude: 7.3990 },
//   { latitude: 5.1370, longitude: 7.4000 },
//   { latitude: 5.1380, longitude: 7.4010 },
//   { latitude: 5.1390, longitude: 7.4020 },
//   { latitude: 5.1400, longitude: 7.4030 },
//   { latitude: 5.1410, longitude: 7.4040 },
//   { latitude: 5.1420, longitude: 7.4050 },
//   { latitude: 5.1430, longitude: 7.4060 },
//   { latitude: 5.1440, longitude: 7.4070 },
//   { latitude: 5.1450, longitude: 7.4080 },
//   { latitude: 5.1460, longitude: 7.4090 },
//   { latitude: 5.1470, longitude: 7.4100 },
//   { latitude: 5.1480, longitude: 7.4110 },
//   { latitude: 5.1490, longitude: 7.4120 },
//   { latitude: 5.1500, longitude: 7.4130 },
//   { latitude: 5.1510, longitude: 7.4140 },
//   { latitude: 5.1520, longitude: 7.4150 },
//   { latitude: 5.1530, longitude: 7.4160 },
//   { latitude: 5.1540, longitude: 7.4170 },
//   { latitude: 5.1550, longitude: 7.4180 },
//   { latitude: 5.1560, longitude: 7.4190 },
//   { latitude: 5.1570, longitude: 7.4200 },
//   { latitude: 5.1580, longitude: 7.4210 },
//   { latitude: 5.1590, longitude: 7.4220 },
//   { latitude: 5.1600, longitude: 7.4230 },
//   { latitude: 5.1610, longitude: 7.4240 },
//   { latitude: 5.1620, longitude: 7.4250 },
//   { latitude: 5.1630, longitude: 7.4260 },
//   { latitude: 5.1640, longitude: 7.4270 },
//   { latitude: 5.1650, longitude: 7.4280 },
//   { latitude: 5.1660, longitude: 7.4290 },
//   { latitude: 5.1670, longitude: 7.4300 },
//   { latitude: 5.1680, longitude: 7.4310 },
//   { latitude: 5.1690, longitude: 7.4320 },
//   { latitude: 5.1700, longitude: 7.4330 },
//   { latitude: 5.1710, longitude: 7.4340 },
//   { latitude: 5.1720, longitude: 7.4350 },
//   { latitude: 5.1730, longitude: 7.4360 },
//   { latitude: 5.1740, longitude: 7.4370 },
//   { latitude: 5.1750, longitude: 7.4380 },
//   { latitude: 5.1760, longitude: 7.4390 },
//   { latitude: 5.1770, longitude: 7.4400 },
//   { latitude: 5.1780, longitude: 7.4410 },
//   { latitude: 5.1790, longitude: 7.4420 },
//   { latitude: 5.1800, longitude: 7.4430 },
//   { latitude: 5.1810, longitude: 7.4440 },
//   { latitude: 5.1820, longitude: 7.4450 },
//   { latitude: 5.1830, longitude: 7.4460 },
//   { latitude: 5.1840, longitude: 7.4470 },
//   { latitude: 5.1850, longitude: 7.4480 },
//   { latitude: 5.1860, longitude: 7.4490 },
//   { latitude: 5.1870, longitude: 7.4500 },
//   { latitude: 5.1880, longitude: 7.4510 },
//   { latitude: 5.1890, longitude: 7.4520 },
//   { latitude: 5.1900, longitude: 7.4530 },
//   { latitude: 5.1910, longitude: 7.4540 },
//   { latitude: 5.1920, longitude: 7.4550 },
//   { latitude: 5.1930, longitude: 7.4560 },
//   { latitude: 5.1940, longitude: 7.4570 },
//   { latitude: 5.1950, longitude: 7.4580 },
//   { latitude: 5.1960, longitude: 7.4590 },
//   { latitude: 5.1970, longitude: 7.4600 },
//   { latitude: 5.1980, longitude: 7.4610 },
//   { latitude: 5.1990, longitude: 7.4620 },
//   { latitude: 5.2000, longitude: 7.4630 },
// ];
