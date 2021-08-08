import React from "react";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
// import collectionItem from '../collection-item/collection-item.component';
import "./collection.style.scss";

const CollectionPage = ({ collection ,match}) => {
    console.log('from collection page')
    console.log(collection)
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2>{title}</h2>
      {items.map((item) => (
        <collectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = () => {
    return({
  collection: selectCollection,
})};
export default connect(mapStateToProps)(CollectionPage);
