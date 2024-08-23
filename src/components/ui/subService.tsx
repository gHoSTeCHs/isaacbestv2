interface SubServiceProp {
  subserviceTitle: string;
  subserviceDescription: string;
  subserviceImage: string;
}

const SubService:React.FC<SubServiceProp> = ({subserviceTitle,
  subserviceDescription,
  subserviceImage}) => {
  return (
    <div className="flex flex-col gap-3 border border-border p-4 rounded-xl ">
      <div className="flex items-center gap-3 ">
        <img src={subserviceImage} alt="Image" className="border border-btn p-3 rounded-full" />
        <h1 className="text-lg font-semibold">{subserviceTitle}</h1>
      </div>
      <p className="text-sm text-txt">
        {subserviceDescription}
      </p>
    </div>
  );
};

export default SubService;
