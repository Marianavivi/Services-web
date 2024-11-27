import * as React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

interface Review {
  rating: number;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Reviews
      </Typography>
      <List>
        {reviews.map((review, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <div>
                  <Typography component="span" variant="body2">
                    Rating: {review.rating} stars
                  </Typography>
                  <Typography component="span" variant="body1">
                    {review.comment}
                  </Typography>
                </div>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ProductReviews;
