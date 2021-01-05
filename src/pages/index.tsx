import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
  const [imgUrl, setImgUrl] = useState<string[]>();
  useEffect(() => {
    setImgUrl(['./1.jpg', './2.jpg']);
  }, []);

  return <>{imgUrl && imgUrl.map((item) => <img src={item} />)}</>;
};

export default Index;
