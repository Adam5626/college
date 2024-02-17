import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const ImageUploadAndCrop = () => {
  const [src, setSrc] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [editor, setEditor] = useState(null);
  const [croppedImageSrc, setCroppedImageSrc] = useState(null);
  const [showEditor, setShowEditor] = useState(true); // State to control the display of editor

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL('image/png');
      setCroppedImageSrc(croppedImage);
      setShowEditor(false); // Hide the editor
    }
  };

  return (
    <div className="profile-imagee">
      {showEditor && (
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {src && (
            <div>
              <AvatarEditor
                ref={(editor) => setEditor(editor)}
                image={src}
                width={250}
                height={250}
                border={50}
                borderRadius={20}
                scale={scale}
                rotate={0}
                position={position}
                onPositionChange={(position) => setPosition(position)}
                onScaleChange={(scale) => setScale(scale)}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      )}
      {!showEditor && croppedImageSrc && (
        <div>
          <img src={croppedImageSrc} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadAndCrop;
