import HomeIcon from "@mui/icons-material/Home";
const InnerBanner = ({ li1, li2, img }) => {
  return (
    <div className="innerbanner-text-wraps">
      <ul>
        <li>
          <a href="#">
            <HomeIcon /> {li1}
          </a>
        </li>
        <li>{li2}</li>
      </ul>
    </div>
  );
};

export default InnerBanner;
