import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.styles.scss";

const Directory = ({ directory }) => {
  const sections = directory.sections;
  return (
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  directory: state.directory
});

export default connect(mapStateToProps)(Directory);
