// Sam Goldberg
// 11/9/26
// Week 3 Assignment - React Component

// The reusable image component with five parameters that must be passed in. 
// It includes a caption text, the source of the image, the alt text, and the image's height and width.
export default function Image({text, img_file, alt, width, height }) {

    return (
        <div>
            <h3>{text}</h3>
            <img src={`/src/assets/${img_file}`}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );

}