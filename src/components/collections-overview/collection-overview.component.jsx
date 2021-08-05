import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollections } from "../../redux/shop/shop.selector";

import "./collection-overview.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);