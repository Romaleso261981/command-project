// import { Image } from '@mantine/core';
import { Link } from 'react-router-dom';

import classes from './HeaderTitle.module.css';

export const HeaderTitle = () => {
  return (
    <Link className={classes.root} to="/">
      {/* <Image src={icon} /> */}
    </Link>
  );
};
