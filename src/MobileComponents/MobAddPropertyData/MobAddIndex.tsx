import React, { useState } from "react";
import {
  MobProjectContainer,
  MobProjectCard,
  Label,
  LabelContainer,
  Input,
  InputReviewContainer,
  DivisionBtn,
  CheckBoxContainer,
  InputCheckContainer,
  LabelContainerForCheckBox,
  InputImageContainer,
} from "./Skins";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { AdminApp } from "../../Components/FirebaseConfig/AdminFirebase";
import Select from "react-select";
import { Helmet } from "react-helmet-async";
import ProcessingStatus from "../MobStatus/ProcessingStatus";
import LoaderPD from "../MobProjectDetails/LoaderPD";

export default function MobAddIndex() {
  const navigate = useNavigate();

  const [File, setFile] = useState<any>([]);
  const [percent, setPercent] = useState(0);
  const [getImageContainer, setGetImageContainer] = useState<boolean>(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState<boolean>(true);
  const [showAmenities, setShowAmenities] = useState<boolean>(false);
  const [showFinallSubmit, setshowFinallSubmit] = useState<boolean>(false);
  const [getApartmentTypeData, setGetApartmentTypeData] = useState<any>("N/A");
  const [getPropertyNameData, setPropertyNameData] = useState<any>("");
  const [getProjectSize, setProjectSize] = useState<any>("");
  const [getNoOfUnits, setNoOfUnits] = useState<any>("");
  const [getBHKData, setShowBHKData] = useState<any>([]);
  const [getPropertyAgeData, setShowFPropertyAgeData] = useState<any>("N/A");
  const [getAvalibleFrom, setShowAvalibleFromData] = useState<any>("");
  const [getFloor, setShowFloorData] = useState<any>("");
  const [getTotalFloor, setShowTotalFloorData] = useState<any>("");
  const [getMinPrice, setMinPrice] = useState<any>("N/A");
  const [getMaxPrice, setMaxPrice] = useState<any>("N/A");
  const [getRentPrices, setRentPricesData] = useState<any>("N/A");
  const [getMaintenance, setMaintenanceData] = useState<any>("");
  const [getPricesnegotiable, setPricesnegotiableData] = useState<any>("N/A");
  const [getBuyOrRentData, setBuyOrRentData] = useState<any>("N/A");
  const [getFurnishing, setFurnishingeData] = useState<any>("N/A");
  const [getParking, setParkingData] = useState<any>("N/A");
  const [getDescription, setDescriptionData] = useState<any>("");
  const [getWater, setWaterData] = useState<any>("N/A");
  const [getPower, setPowerData] = useState<any>("N/A");
  const [getSecurity, setSecurityData] = useState<any>("N/A");
  const [getClubhouse, setClubhouseData] = useState<any>("N/A");
  const [getGym, setGymData] = useState<any>("N/A");
  const [getplayground, setplaygroundData] = useState<any>("N/A");
  const [getOpenGym, setOpenGymData] = useState<any>("N/A");
  const [getLift, setLifData] = useState<any>("N/A");
  const [getSewageSystem, setSewageSystemData] = useState<any>("N/A");
  const [getFireAlarm, setFireAlarmData] = useState<any>("N/A");
  const [getPark, setparkData] = useState<any>("N/A");
  const [getShoppingCentre, setShoppingCentreData] = useState<any>("N/A");
  const [getInterCom, setInterComData] = useState<any>("N/A");
  const [getSwimmingPool, setSwimmingPoolData] = useState<any>("N/A");
  const [getVisitorsParking, setVisitorsParkingData] = useState<any>("N/A");
  const [getAddressData, setAddressData] = useState<any>("");
  const [getContentData, setContentData] = useState<any>("");
  const [getUniqueid, setUniqueId] = useState<any>("N/A");
  const [getcityData, setCityData] = useState<any>("");
  const [getstreetData, setStreetData] = useState<any>("");
  const [getKathaData, setKathaData] = useState<any>("N/A");
  const [getSaleSeedData, setSaleSeedData] = useState<any>("N/A");
  const [getPropertyTaxData, setPropertyTaxData] = useState<any>("N/A");
  const [getAdvanceData, setAdvanceData] = useState<any>("");
  const [getOccupancyCertificateData, setOccupancyCertificateData] =
    useState<any>("N/A");
  const [getProjectArea, setProjectArea] = useState<any>("");
  const [PipedGas, setPipedGas] = useState<any>("N/A");
  const [MulitpruposeHall, setMulitpruposeHall] = useState<any>("N/A");
  const [TenniusCourt, setTenniusCourt] = useState<any>("N/A");
  const [MeditationArea, setMeditationArea] = useState<any>("N/A");
  const [BatmitionCourt, setBatmitionCourt] = useState<any>("N/A");
  const [BHKArray, setBHKArray] = useState<any>([]);
  const [showProcessingScreen, setShowProcessingScreen] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<any>(false);

  const ApartmentType = [
    { value: "Apartment", label: "Apartment" },
    { value: "Gated community Villa", label: "Gated community Villa" },
    { value: "Independent Houses/Villa", label: "Independent Houses/Villa" },
    { value: "Stand Alone Building", label: "Stand Alone Building" },
    { value: "Farm House", label: "Farm House" },
  ];

  const BHKType = [
    { value: "1", label: "1 BHK" },
    { value: "2", label: "2 BHK" },
    { value: "3", label: "3 BHK" },
    { value: "4", label: "4 BHK" },
    { value: "5", label: "5 BHK" },
    { value: "5+", label: "5 BHK Plus" },
  ];

  const PropertyAge = [
    { value: "Under Construction", label: "Under Construction" },
    { value: "Less than a year", label: "Less than a year" },
    { value: "1-3 years", label: "1-3 years" },
    { value: "3-6 years", label: "3-6 years" },
    { value: "7-10 years", label: "7-10 years" },
    { value: "More than 10 years", label: "More than 10 years" },
  ];

  const Negotiable = [
    { value: "Negotiable", label: "Negotiable" },
    { value: "Not-Negotiable", label: "Not-Negotiable" },
  ];

  const FurnishingType = [
    { value: "Unfurnished", label: "Unfurnished" },
    { value: "Semi-furnished", label: "Semi-furnished" },
    { value: "Fully furnished", label: "Fully furnished" },
  ];

  const ParkingType = [
    { value: "Open car", label: "Open car" },
    { value: "Bike and Car", label: "Bike and Car" },
    { value: "Covered car", label: "Covered car" },
    { value: "No car parking", label: "No car parking" },
    { value: "Only Bike", label: "Only Bike" },
  ];

  const WaterSupply = [
    { value: "Borewell", label: "Borewell" },
    { value: "Cooperation", label: "Cooperation" },
    {
      value: "Borewell and Cooperation",
      label: "Borewell and Cooperation",
    },
  ];

  const PowerSupply = [
    { value: "Partially", label: "Partially" },
    { value: "Full", label: "Full" },
    { value: "None", label: "None" },
  ];

  const Security = [
    { value: "CCTV", label: "CCTV" },
    { value: "Guards", label: "Guards" },
    { value: "Both CCTV & Guards", label: "Both CCTV & Guards" },
    { value: "None", label: "None" },
  ];

  const KhataType = [
    { value: "A Khata", label: "A Khata" },
    { value: "B Khata", label: "B Khata" },
    { value: "E Khata", label: "E Khata" },
    { value: "Punchayat khata", label: "Punchayat khata" },
    { value: "DC conversion", label: "DC conversion" },
  ];

  const SeedType = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const PropertyTaxType = [
    { value: "Upto data", label: "Upto data" },
    { value: "No", label: "No" },
  ];

  const CityOptions = [
    { value: "Jayanagar", label: "Jayanagar" },
    { value: "Indira Nagar", label: "Indira Nagar" },
    { value: "Ashok Nagar", label: "Ashok Nagar" },
    { value: "Koramangala", label: "Koramangala" },
    { value: "Whitefield", label: "Whitefield" },
    { value: "Marathahalli", label: "Marathahalli" },
    { value: "BTM Layout", label: "BTM Layout" },
    { value: "Vijaya Nagar", label: "Vijaya Nagar" },
    { value: "JP Nagar", label: "JP Nagar" },
    { value: "HSR Layout", label: "HSR Layout" },
    { value: "Malleshwaram", label: "Malleshwaram" },
    { value: "Bannerghatta Road", label: "Bannerghatta Road" },
    { value: "Kaggadasapura", label: "Kaggadasapura" },
    { value: "Basavanagudi", label: "Basavanagudi" },
    { value: "Banashankari", label: "Banashankari" },
    { value: "Bellandur", label: "Bellandur" },
    { value: "T Dasarahalli", label: "T Dasarahalli" },
    { value: "Brookefield", label: "Brookefield" },
    { value: "Yelahanka", label: "Yelahanka" },
    { value: "Sarjapur Road", label: "Sarjapur Road" },
    { value: "Sadashiva Nagar", label: "Sadashiva Nagar" },
    { value: "Kalyan Nagar", label: "Kalyan Nagar" },
    { value: "KR Puram", label: "KR Puram" },
    { value: "Hebbal", label: "Hebbal" },
    { value: "Bilekahalli", label: "Bilekahalli" },
    { value: "Vidyaranyapura", label: "Vidyaranyapura" },
    { value: "Hosur Road", label: "Hosur Road" },
    { value: "Ramamurthy Nagar", label: "Ramamurthy Nagar" },
    { value: "Domlur", label: "Domlur" },
    { value: "HeShivaji Nagarbbal", label: "Shivaji Nagar" },
    { value: "Arekere", label: "Arekere" },
    { value: "Sanjay Nagar", label: "Sanjay Nagar" },
    { value: "Bagalakunte", label: "Bagalakunte" },
    { value: "New Thippasandra", label: "New Thippasandra" },
    { value: "Banaswadi", label: "Banaswadi" },
    { value: "Vasanth Nagar", label: "Vasanth Nagar" },
    { value: "CV Raman Nagar", label: "CV Raman Nagar" },
    { value: "Frazer Town", label: "Frazer Town" },
    { value: "Bommanahalli", label: "Bommanahalli" },
    { value: "Sahakara Nagar", label: "Sahakara Nagar" },
    { value: "Kumaraswamy Layout", label: "Kumaraswamy Layout" },
    { value: "Yelahanka New Town", label: "Yelahanka New Town" },
    { value: "Seshadripuram", label: "Seshadripuram" },
    { value: "Sadduguntepalya", label: "Sadduguntepalya" },
    { value: "Padmanabha Nagar", label: "Padmanabha Nagar" },
    { value: "Yeshwanthpur", label: "Yeshwanthpur" },
    { value: "Wilson Garden", label: "Wilson Garden" },
    { value: "Kengeri Satellite Town", label: "Kengeri Satellite Town" },
    { value: "Mathikere", label: "Mathikere" },
    { value: "Attiguppe", label: "Attiguppe" },
    { value: "Hongasandra", label: "Hongasandra" },
    { value: "Mahadevapura", label: "Mahadevapura" },
    { value: "Doddanekkundi", label: "Doddanekkundi" },
    { value: "Murugesh Palya", label: "Murugesh Palya" },
    { value: "Ejipura", label: "Ejipura" },
    { value: "Raja Rajeshwari Nagar", label: "Raja Rajeshwari Nagar" },
    { value: "Hulimavu", label: "Hulimavu" },
    { value: "Gandhi Nagar", label: "Gandhi Nagar" },
    { value: "Adugodi", label: "Adugodi" },
    { value: "Kodihalli", label: "Kodihalli" },
    { value: "Bennigana Halli", label: "Bennigana Halli" },
    { value: "Gottigere", label: "Gottigere" },
    { value: "Chamarajpet", label: "Chamarajpet" },
    { value: "Jalahalli West", label: "Jalahalli West" },
    { value: "Uttarahalli", label: "Uttarahalli" },
    { value: "Nagavara", label: "Nagavara" },
    { value: "Panduranga Nagar", label: "Panduranga Nagar" },
    { value: "Sudhama Nagar", label: "Sudhama Nagar" },
    { value: "Bidrahalli", label: "Bidrahalli" },
    { value: "Sampangi Rama Nagar", label: "Sampangi Rama Nagar" },
    { value: "Jalahalli East", label: "Jalahalli East" },
    { value: "Chickpet", label: "Chickpet" },
    { value: "Ganga Nagar", label: "Ganga Nagar" },
    { value: "Hoodi", label: "Hoodi" },
    { value: "RT Nagar", label: "RT Nagar" },
    { value: "HBR Layout", label: "HBR Layout" },
    { value: "Harlur", label: "Harlur" },
    { value: "Sunkadakatte", label: "Sunkadakatte" },
    { value: "Kadubeesanahalli", label: "Kadubeesanahalli" },
    { value: "Jayamahal", label: "Jayamahal" },
    { value: "Begur", label: "Begur" },
    { value: "Jeevanbheema Nagar", label: "Jeevanbheema Nagar" },
    { value: "Nandini Layout", label: "Nandini Layout" },
    { value: "RMV 2nd Stage", label: "RMV 2nd Stage" },
    { value: "Shanthi Nagar", label: "Shanthi Nagar" },
    { value: "Maruthi Sevanagar", label: "Maruthi Sevanagar" },
    {
      value: "Ragavendra Nagar-Sunkadakatte",
      label: "Ragavendra Nagar-Sunkadakatte",
    },
    { value: "Kempegowda Nagar", label: "Kempegowda Nagar" },
    { value: "Kanakapura Road", label: "Kanakapura Road" },
    { value: "Bannerghatta", label: "Bannerghatta" },
    { value: "Kamala Nagar", label: "Kamala Nagar" },
    { value: "Richmond Town", label: "Richmond Town" },
    { value: "Chikkalasandra", label: "Chikkalasandra" },
    { value: "Kalena Agrahara", label: "Kalena Agrahara" },
    { value: "Bidadi", label: "Bidadi" },
    { value: "Kasavanahalli", label: "Kasavanahalli" },
    { value: "Kadugodi", label: "Kadugodi" },
    { value: "Varthur", label: "Varthur" },
  ];

  const BuyOrRent = [
    { value: "Sale", label: "Sale" },
    { value: "Rent", label: "Rent" },
    { value: "Lease", label: "Lease" },
  ];

  const RentAmountType = [
    { value: 3, label: "1 to 5 k" },
    { value: 7, label: "6 to 10 k" },
    { value: 13, label: "11 to 15 k" },
    { value: 17, label: "16 to 20 k" },
    { value: 23, label: "21 to 25 k" },
    { value: 27, label: "26 to 30 k" },
    { value: 33, label: "31 to 35 k" },
    { value: 37, label: "36 to 40 k" },
    { value: 43, label: "41 to 45 k" },
    { value: 47, label: "46 to 50 k" },
    { value: 53, label: "51 to 55 k" },
    { value: 57, label: "56 to 60 k" },
    { value: 63, label: "61 to 65 k" },
    { value: 67, label: "66 to 70 k" },
    { value: 73, label: "71 to 75 k" },
    { value: 77, label: "76 to 80 k" },
    { value: 83, label: "81 to 85 k" },
    { value: 87, label: "86 to 90 k" },
  ];

  const MiniumRange = [
    { value: 5, label: "₹5 Lacs" },
    { value: 10, label: "₹10 Lacs" },
    { value: 15, label: "₹15 Lacs" },
    { value: 20, label: "₹20 Lacs" },
    { value: 25, label: "₹25 Lacs" },
    { value: 30, label: "₹30 Lacs" },
    { value: 35, label: "₹35 Lacs" },
    { value: 40, label: "₹40 Lacs" },
    { value: 45, label: "₹45 Lacs" },
    { value: 50, label: "₹50 Lacs" },
    { value: 55, label: "₹55 Lacs" },
    { value: 60, label: "₹60 Lacs" },
    { value: 65, label: "₹65 Lacs" },
    { value: 70, label: "₹70 Lacs" },
    { value: 75, label: "₹75 Lacs" },
    { value: 80, label: "₹80 Lacs" },
    { value: 85, label: "₹85 Lacs" },
    { value: 90, label: "₹90 Lacs" },
    { value: 95, label: "₹95 Lacs" },
    { value: 100, label: "₹1 Crores " },
    { value: 101, label: "₹1.20 Crores" },
    { value: 102, label: "₹1.35 Crores" },
    { value: 103, label: "₹1.52 Crores" },
    { value: 104, label: "₹2.5 Crores" },
    { value: 105, label: "₹3.5 Crores" },
    { value: 106, label: "₹4.5 Crores" },
    { value: 107, label: "₹5.5 Crores" },
    { value: 108, label: "₹6.5 Crores" },
    { value: 109, label: "₹7.5 Crores" },
    { value: 110, label: "₹8.5 Crores" },
  ];

  const handleKeyPress = (e: any) => {
    const regex = new RegExp(/^[+0-9\b]+$/);

    if (!regex.test(e.key)) {
      if (e.key !== "Backspace") {
        e.preventDefault();
      }
    }
  };

  const ImageFile: any = [];
  const storage = getStorage(AdminApp);
  const auth = getAuth(AdminApp);
  const user: any = auth.currentUser;

  function handleChange(event: any) {
    //  setFile(event.target.files[0]);
    ImageFile[0] = event.target.files[0];
  }

  function handleChange1(event: any) {
    ImageFile[1] = event.target.files[0];
  }

  function handleChange2(event: any) {
    ImageFile[2] = event.target.files[0];
  }

  function handleChange3(event: any) {
    ImageFile[3] = event.target.files[0];
  }

  function handleChange4(event: any) {
    ImageFile[4] = event.target.files[0];
  }

  function handleChange5 (event: any) {
    ImageFile[5] = event.target.files[0];
  }

  function handleBHK1 (event: any) {
    ImageFile[6] = event.target.files[0];
  }
  function handleBHK2 (event: any) {
    ImageFile[7] = event.target.files[0];
  }
  function handleBHK3 (event: any) {
    ImageFile[8] = event.target.files[0];
  }
  function handleBHK4 (event: any) {
    ImageFile[9] = event.target.files[0];
  }
  function handleBHK5 (event: any) {
    ImageFile[10] = event.target.files[0];
  }
  function handleBHK5plus (event: any) {
    ImageFile[11] = event.target.files[0];
  }

  const handleUpload = () => {
    setUniqueId("id" + Math.random().toString(36).slice(2));
    const uid = sessionStorage.getItem("DeviceId");
    if (ImageFile.length < 4) {
      alert("Please upload the images");
    } else {
      // setFile(ImageFile);
      ImageFile.forEach((element: any) => {
        const storageRef = ref(storage, `PropData/${uid}/${element.name}`);
        const uploadTask = uploadBytesResumable(storageRef, element);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            setPercent((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              let index = ImageFile.indexOf(element);
              ImageFile[index] = downloadURL;
            });
          }
        );
      });
      setFile(ImageFile);
      setShowLoader(true);
      setTimeout(() => {
        setGetImageContainer(false);
        setshowFinallSubmit(true);
        setShowLoader(false);
      }, 5000);
    }
  };

  const HandelSubmitBtn = async () => {
      try {
        const db = getFirestore(AdminApp);
        const uid = sessionStorage.getItem("DeviceId");
    
        try {
          const docRef = await addDoc(collection(db, "ProdData"), {
            uid: uid,
            images: {
              img1: File[0] || "N/A",
              img2: File[1] || "N/A",
              img3: File[2] || "N/A",
              img4: File[3] || "N/A",
              img5: File[4] || "N/A",
              img6: File[6] || "N/A",
              img7: File[7] || "N/A",
              img8: File[8] || "N/A",
              img9: File[9] || "N/A",
              img10: File[10] || "N/A",
              img11: File[11] || "N/A",
            },
            Brochure: File[5] || "N/A",
            ShortList:[],
            ApartmentType: getApartmentTypeData.value,
            PropertyName: getPropertyNameData,
            ProjectSize: getProjectSize,
            NoOfUnits: getNoOfUnits,
            BHK: getBHKData,
            ProjectArea: getProjectArea,
            PropertyAge: getPropertyAgeData.value,
            AvalibleData: getAvalibleFrom,
            Floor: getFloor,
            TotalFloor: getTotalFloor,
            MinPrices: getMinPrice,
            MaxPrice: getMaxPrice,
            RentPrices: getRentPrices.label || "N/A",
            Advance: getAdvanceData,
            MaintenanceCost: getMaintenance,
            BuyOrRent: getBuyOrRentData,
            Negotiable: getPricesnegotiable.value,
            Furnishing: getFurnishing.value,
            Parking: getParking.value,
            Description: getDescription,
            WaterSupply: getWater.value,
            Power: getPower.value,
            Security: getSecurity.value,
            uniqueId: getUniqueid,
            City: getcityData.value,
            Locality: getstreetData,
            Address: getAddressData,
            ContactNumber: getContentData,
            KhataType: getKathaData.value,
            SaleSeed: getSaleSeedData.value,
            PropertyTax: getPropertyTaxData.value,
            OccupancyCertificate: getOccupancyCertificateData.value,
            Amenities: {
              ClubHouse: getClubhouse,
              Gym: getGym,
              PlayGround: getplayground,
              OpenGym: getOpenGym,
              Lift: getLift,
              SewageSystem: getSewageSystem,
              FireAlarm: getFireAlarm,
              Park: getPark,
              ShoppingCentre: getShoppingCentre,
              InterCom: getInterCom,
              SwimmingPool: getSwimmingPool,
              VisitorsParking: getVisitorsParking,
              PipedGas: PipedGas,
              MulitpruposeHall: MulitpruposeHall,
              TenniusCourt: TenniusCourt,
              MeditationArea: MeditationArea,
              BatmitionCourt: BatmitionCourt,
            },
          });
          setShowProcessingScreen(true);
          setTimeout(() => {
            setShowProcessingScreen(false);
            navigate("/");
          }, 4000);
        } catch (e) {
          console.error(e)
        }
      } catch (e) {
        console.error(e);
      }
  };

  const HandleGym = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGymData(event.target.value);
  };

  const HandlePlayground = (event: React.ChangeEvent<HTMLInputElement>) => {
    setplaygroundData(event.target.value);
  };

  const HandlePark = (event: React.ChangeEvent<HTMLInputElement>) => {
    setparkData(event.target.value);
  };

  const HandleShopping = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShoppingCentreData(event.target.value);
  };

  const HandleOpenGym = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenGymData(event.target.value);
  };

  const HandkeLift = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLifData(event.target.value);
  };

  const HandleSewage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSewageSystemData(event.target.value);
  };

  const HandleFireAlarm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFireAlarmData(event.target.value);
  };

  const HandleInterCom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterComData(event.target.value);
  };

  const HandleSwimming = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwimmingPoolData(event.target.value);
  };

  const HandleVisitor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisitorsParkingData(event.target.value);
  };

  const enableAmenities = () => {
    setShowPropertyDetails(false);
    setShowAmenities(true);
  }
  const enableImagesContainer = () => {
    setBHKArray(getBHKData.map((item: any) => (item.value)));
    setShowAmenities(false);
    setGetImageContainer(true);
    console.log(BHKArray)
  }

  return (
    <>
    <Helmet>
    <title>Add your Project in Legacy Properties</title>
      <meta name="description" content='Add your Project in Legacy Properties to explore luxury homes in sought-after locations' />
      <link rel="canonical" href="https://legacyproperties.in/addProjectData"/>
    </Helmet>
    {showLoader && <LoaderPD/>}

    {showProcessingScreen ? <ProcessingStatus/> : 
    <MobProjectContainer>
      {showPropertyDetails && (
        <MobProjectCard>
          <LabelContainer>
            <Label> Property Type : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getApartmentTypeData}
              onChange={setGetApartmentTypeData}
              options={ApartmentType}
              placeholder="ApartmentType"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Apartment Society / Project Name : </Label>

            <Input
              type="text"
              value={getPropertyNameData}
              onChange={(e: any) => setPropertyNameData(e.target.value)}
              placeholder="Example : 'LG' "
            />
          </LabelContainer>
          <LabelContainer>
            <Label> BHK Type : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              isMulti
              onChange={setShowBHKData}
              options={BHKType}
              placeholder="BHK Type"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Project Size : </Label>
            <Input
              type="text"
              value={getProjectSize}
              onChange={(e: any) => setProjectSize(e.target.value)}
              placeholder="Example : 8 Buildings-700 units "
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Available from : </Label>
            <Input
              type="date"
              placeholder='eg : "Godrej"'
              onChange={(e: any) => setShowAvalibleFromData(e.target.value)}
            />
          </LabelContainer>

          <LabelContainer>
            <Label> No of Units : </Label>
            <Input
              maxLength={5}
              type="tel"
              value={getNoOfUnits}
              onChange={(e: any) => setNoOfUnits(e.target.value)}
              placeholder="Example : '700' "
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Project Area  : </Label>
            <Input
              type="text"
              value={getProjectArea}
              onChange={(e: any) => setProjectArea(e.target.value)}
              placeholder="Example : 10.00 acres "
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Property Age : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getPropertyAgeData}
              onChange={setShowFPropertyAgeData}
              options={PropertyAge}
              placeholder="Property Age"
            />
          </LabelContainer>

          <LabelContainer>
            <Label>Floor : </Label>
            <Input
              type="text"
              value={getFloor}
              onChange={(e: any) => setShowFloorData(e.target.value)}
              placeholder="Example : 5,6,7,10,15"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Total Floor : </Label>
            <Input
              type="text"
              value={getTotalFloor}
              onChange={(e: any) => setShowTotalFloorData(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Example : 20"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Sell/Rent/Lease : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "3px",
                  fontStyle: "italic",
                }),
              }}
              defaultValue={getBuyOrRentData}
              onChange={setBuyOrRentData}
              options={BuyOrRent}
              placeholder="Bugget Range"
            />
          </LabelContainer>
          {(getBuyOrRentData.value === "Sale" ||
            getBuyOrRentData.value === "Lease") && (
            <>
              <LabelContainer>
                <Label> Minium Price : </Label>
                <Select
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      padding: "3px",
                      fontStyle: "italic",
                    }),
                  }}
                  defaultValue={getMinPrice}
                  onChange={setMinPrice}
                  options={MiniumRange}
                  placeholder="Bugget Range"
                />
              </LabelContainer>

              <LabelContainer>
                <Label> Maxium Price : </Label>
                <Select
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      padding: "3px",
                      fontStyle: "italic",
                    }),
                  }}
                  defaultValue={getMaxPrice}
                  onChange={setMaxPrice}
                  options={MiniumRange}
                  placeholder="Bugget Range"
                />
              </LabelContainer>
            </>
          )}

          {getBuyOrRentData.value === "Rent" && (
            <>
              <LabelContainer>
                <Label> Rent Range : </Label>
                <Select
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      padding: "3px",
                      fontStyle: "italic",
                    }),
                  }}
                  defaultValue={getRentPrices}
                  onChange={setRentPricesData}
                  options={RentAmountType}
                  placeholder="Rent Range"
                />
              </LabelContainer>
            </>
          )}

          <LabelContainer>
            <Label>Monthly Maintenance : </Label>
            <Input
              type="text"
              value={getMaintenance}
              onChange={(e: any) => setMaintenanceData(e.target.value)}
              placeholder="Example : 6k"
            />
          </LabelContainer>

          {getBuyOrRentData.value === "Rent" && (
            <>
              <LabelContainer>
                <Label> Advance : </Label>
                <Input
                  type="text"
                  value={getAdvanceData}
                  onChange={(e: any) => setAdvanceData(e.target.value)}
                  placeholder="Example : '40k'"
                />
              </LabelContainer>
            </>
          )}

          <LabelContainer>
            <Label>Furnishing : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getFurnishing}
              onChange={setFurnishingeData}
              options={FurnishingType}
              placeholder="Furnishing Type"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Negotiable / Not : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                  width: "20em",
                }),
              }}
              defaultValue={getPricesnegotiable}
              onChange={setPricesnegotiableData}
              options={Negotiable}
              placeholder="Negotiable/Not"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Parking : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                  width: "20em",
                }),
              }}
              defaultValue={getParking}
              onChange={setParkingData}
              options={ParkingType}
              placeholder="Parking Type"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Property Description : </Label>
            <InputReviewContainer
              onChange={(e: any) => setDescriptionData(e.target.value)}
              placeholder="Write the about the project / property"
            />
          </LabelContainer>

          <DivisionBtn onClick={enableAmenities}> Next &gt;</DivisionBtn>
        </MobProjectCard>
      )}

      {showAmenities && (
        <MobProjectCard>
          <LabelContainer>
            <Label> Water Supply : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getWater}
              onChange={setWaterData}
              options={WaterSupply}
              placeholder="water supply"
              isSearchable
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Security : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getSecurity}
              onChange={setSecurityData}
              options={Security}
              placeholder="Security"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Power Supply : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getPower}
              onChange={setPowerData}
              options={PowerSupply}
              placeholder="Power supply"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> khata Certificate type : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getKathaData}
              onChange={setKathaData}
              options={KhataType}
              placeholder="Khata Type"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Sale Seed : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getSaleSeedData}
              onChange={setSaleSeedData}
              options={SeedType}
              placeholder="Sale Seed"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Property tax : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getPropertyTaxData}
              onChange={setPropertyTaxData}
              options={PropertyTaxType}
              placeholder="Property tax"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Occupancy Certificate : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "5px",
                }),
              }}
              defaultValue={getOccupancyCertificateData}
              onChange={setOccupancyCertificateData}
              options={SeedType}
              placeholder="occupancy certificate"
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Area : </Label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "3px",
                  fontStyle: "italic",
                }),
              }}
              onChange={setCityData}
              options={CityOptions}
              placeholder="Search for the Area"
              isSearchable={true}
              isClearable={true}
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Street : </Label>
            <Input
              type="text"
              value={getstreetData}
              onChange={(e: any) => setStreetData(e.target.value)}
              placeholder="Example : 'Naganatha pura' "
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Landmark : </Label>
            <Input
              type="text"
              value={getAddressData}
              onChange={(e: any) => setAddressData(e.target.value)}
              placeholder="Example : 'Full Address' "
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Contact Number : </Label>
            <Input
              type="tel"
              maxLength={10}
              value={getContentData}
              onChange={(e: any) => setContentData(e.target.value)}
              placeholder="Example : '93********8' "
              onKeyDown={handleKeyPress}
            />
          </LabelContainer>

          <LabelContainer>
            <Label> Amenities : </Label>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="clubHouse"
                  value="Club house"
                  onChange={(event: any) =>
                    setClubhouseData(event.target.value)
                  }
                />
                Club house
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Multi purpose hall"
                  onChange={(e: any) => {
                    setMulitpruposeHall(e.target.value);
                  }}
                />
                Multipurpose Hall
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Tennius Court"
                  onChange={(e: any) => {
                    setTenniusCourt(e.target.value);
                  }}
                />
                Outdoor Tennis Courts
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Meditation Area"
                  onChange={(e: any) => {
                    setMeditationArea(e.target.value);
                  }}
                />
                Meditation Area
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="playground"
                  onChange={HandlePlayground}
                />
                playground
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="park"
                  onChange={HandlePark}
                />
                park{" "}
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Shopping centre"
                  onChange={HandleShopping}
                />
                shopping centre
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Open Gym "
                  onChange={HandleOpenGym}
                />
                open gym{" "}
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Lift"
                  onChange={HandkeLift}
                />
                Lift{" "}
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Sewage system "
                  onChange={HandleSewage}
                />
                sewage system
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Fire alarm "
                  onChange={HandleFireAlarm}
                />
                fire alarm
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Intercom "
                  onChange={HandleInterCom}
                />
                inter com{" "}
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Gym"
                  onChange={HandleGym}
                />
                Gym{" "}
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="swimming pool"
                  onChange={HandleSwimming}
                />
                swimming pool
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Visitors parking"
                  onChange={HandleVisitor}
                />
                visitors parking
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Piped Gas"
                  onChange={(e: any) => {
                    setPipedGas(e.target.value);
                  }}
                />
                Piped Gas{" "}
              </LabelContainerForCheckBox>
            </CheckBoxContainer>

            <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="Batmition Court"
                  onChange={(e: any) => {
                    setBatmitionCourt(e.target.value);
                  }}
                />
                Indoor Squash & Batmition Courts
              </LabelContainerForCheckBox>
            </CheckBoxContainer>
          </LabelContainer>
          <DivisionBtn onClick={enableImagesContainer}> Next &gt;</DivisionBtn>
        </MobProjectCard>
      )}

      {getImageContainer && (
        <MobProjectCard>
          <Label> Please upload Property Images : </Label>
          {percent}
          <InputImageContainer
            type="file"
            accept="/image/*"
            onChange={handleChange}
          />
          <InputImageContainer
            type="file"
            accept="/image/*"
            onChange={handleChange1}
          />
          <InputImageContainer
            type="file"
            accept="/image/*"
            onChange={handleChange2}
          />
          <InputImageContainer
            type="file"
            accept="/image/*"
            onChange={handleChange3}
          />
          <InputImageContainer
            type="file"
            accept="/image/*"
            onChange={handleChange4}
          />

          <Label> Please upload Brochure : </Label>
          <InputImageContainer
            type="file"
            onChange={handleChange5}
          />

          {BHKArray.includes("1") &&
          <>
          <Label> Please upload 1 BHK Floor plan : </Label>
          <InputImageContainer
            type="file" 
            accept="/image/*"
            onChange={handleBHK1}
          />
          </>
        }
          {BHKArray.includes("2") &&
          <>
          <Label> Please upload 2 BHK Floor plan : </Label>
          <InputImageContainer
            type="file" 
            accept="/image/*"
            onChange={handleBHK2}
          />
          </>
        }
          {BHKArray.includes("3") &&
          <>
          <Label> Please upload 3 BHK Floor plan : </Label>
          <InputImageContainer
            type="file" 
            accept="/image/*"
            onChange={handleBHK3}
          />
          </>
        }
          {BHKArray.includes("4") &&
          <>
          <Label> Please upload 4 BHK Floor plan : </Label>
          <InputImageContainer
            type="file" 
            accept="/image/*"
            onChange={handleBHK4}
          />
          </>
        }
          {BHKArray.includes("5") &&
          <>
          <Label> Please upload 5 BHK Floor plan : </Label>
          <InputImageContainer
            type="file" 
            accept="/image/*"
            onChange={handleBHK5}
          />
          </>
        }
          {BHKArray.includes("5+") &&
          <>
          <Label> Please upload 5+ BHK Floor plan : </Label>
          <InputImageContainer
            type="file" 
            accept="/image/*"
            onChange={handleBHK5plus}
          />
          </>
        }

          <DivisionBtn onClick={handleUpload}> Next &gt;</DivisionBtn>
        </MobProjectCard>
      )}

      {showFinallSubmit && (
        <MobProjectCard>
          <CheckBoxContainer>
              <LabelContainerForCheckBox>
                <InputCheckContainer
                  type="checkbox"
                  name="ApartmentType"
                  value="playground"
                  onChange={HandlePlayground}
                />
                I Agree that all details provided by me is accurate.
              </LabelContainerForCheckBox>
            </CheckBoxContainer>
          

          <DivisionBtn onClick={HandelSubmitBtn}> Submit</DivisionBtn>
        </MobProjectCard>
      )}
    </MobProjectContainer>
  }
    </>
  );
}