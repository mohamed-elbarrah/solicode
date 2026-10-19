# Construct the entities

## CLIENT

| Column Name  | Key Type         | Description / Notes               |
| :----------- | :--------------- | :-------------------------------- |
| `id_client`  | Primary Key (PK) | Unique identifier for each client |
| `nom_client` | Attribute        | Name of the client                |

## COMMANDE

| Column Name     | Key Type         | Description / Notes                                          |
| :-------------- | :--------------- | :----------------------------------------------------------- |
| `id_commande`   | Primary Key (PK) | Unique identifier for each order                             |
| `date_commande` | Attribute        | Date when the order was placed                               |
| `id_client`     | Foreign Key (FK) | References the client table (indicates who placed the order) |

## PRODUIT

| Column Name   | Key Type         | Description / Notes                |
| :------------ | :--------------- | :--------------------------------- |
| `id_produit`  | Primary Key (PK) | Unique identifier for each product |
| `nom_produit` | Attribute        | Name of the product                |

## LIGNE_COMMANDE

| Column Name          | Key Type                            | Description / Notes                                         |
| :------------------- | :---------------------------------- | :---------------------------------------------------------- |
| `id_commande`        | Primary Key (PK) / Foreign Key (FK) | Part of composite primary key; references the order table   |
| `id_produit`         | Primary Key (PK) / Foreign Key (FK) | Part of composite primary key; references the product table |
| `quantite_commandee` | Attribute                           | Quantity of the product ordered                             |
