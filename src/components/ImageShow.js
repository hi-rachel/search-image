function ImageShow({ image }) {
  return (
    <div>
      <a href={image.links.html} rel="noopener noreferrer" target="_blank">
        <img src={image.urls.small} alt={image.alt_description} />
      </a>
    </div>
  );
}

export default ImageShow;
