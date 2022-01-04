import GalleryComponent from "../components/Gallery/GalleryComponent";
const GallerySite = ({ isOn }) => {
  return (
    <div>
      <GalleryComponent isOn={isOn} />
    </div>
  );
};

export default GallerySite;
