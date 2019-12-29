import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const categories = [
  { id: 0, title: "Kingdom: Animal", subcategories: [1, 2, 3, 4] },
  { id: 1, title: "Phylum: Chordata", subcategories: [2] },
  { id: 2, title: "Clade: Synapsida", subcategories: [3] },
  { id: 3, title: "Class: Mammailia", subcategories: [4] },
  { id: 4, title: "Order: Carnivora", subcategories: [5] },
  { id: 5, title: "Subfamily: Felinae", subcategories: [6] },
  { id: 6, title: "Genus: Felis", subcategories: [7] },
  { id: 7, title: "Species: Felis catus", subcategories: [] }
];

const Category = ({ match }) => {
  const category = categories.find(category => {
    return parseInt(match.params.catId) === category.id;
  });

  return (
    <>
      {match.isExact && (
        <>
          <h1>{category.title}</h1>
          {category.subcategories.map(subCategoryId => {
            return (
              <div>
                <Link key={subCategoryId} to={`${match.url}/${subCategoryId}`}>
                  {categories.find(cat => cat.id === subCategoryId).title}
                </Link>
              </div>
            );
          })}
          {category.id === 7 && (
            <img src="https://cataas.com/cat" alt="cat" height="300" />
          )}
        </>
      )}
      <Switch>
        <Route path={`${match.path}/:catId`} component={Category} />
      </Switch>
    </>
  );
};

export const RoutingExample = () => {
  return (
    <Switch>
      <Route path={`/:catId`} component={Category} />
    </Switch>
  );
};
