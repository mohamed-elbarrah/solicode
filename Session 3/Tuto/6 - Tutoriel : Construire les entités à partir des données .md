# Construct the entities

## ARTICLE

| Column Name        | Key Type         | Description / Notes                                                         |
| :----------------- | :--------------- | :-------------------------------------------------------------------------- |
| `id_article`       | Primary Key (PK) | Unique identifier for each article                                          |
| `titre_article`    | Attribute        | Title of the article                                                        |
| `contenu_article`  | Attribute        | Main body text or content                                                   |
| `date_publication` | Attribute        | Date and time when the article was published                                |
| `statut_article`   | Attribute        | Status of the article (e.g., draft, published)                              |
| `image_article`    | Attribute        | Path or URL for the article's featured image                                |
| `id_auteur`        | Foreign Key (FK) | References the author table (indicates who wrote the article)               |
| `id_categorie`     | Foreign Key (FK) | References the category table (classifies the topic the article belongs to) |

## AUTEUR

| Column Name     | Key Type         | Description / Notes                                     |
| :-------------- | :--------------- | :------------------------------------------------------ |
| `id_auteur`     | Primary Key (PK) | Unique identifier for each author                       |
| `nom_auteur`    | Attribute        | Last name of the author                                 |
| `prenom_auteur` | Attribute        | First name of the author                                |
| `email_auteur`  | Attribute        | Email address of the author                             |
| `id_ville`      | Foreign Key (FK) | References the city table (indicates the author's city) |

## VILLE

| Column Name | Key Type         | Description / Notes             |
| :---------- | :--------------- | :------------------------------ |
| `id_ville`  | Primary Key (PK) | Unique identifier for each city |
| `nom_ville` | Attribute        | Name of the city                |

## CATEGORIE

| Column Name             | Key Type         | Description / Notes                 |
| :---------------------- | :--------------- | :---------------------------------- |
| `id_categorie`          | Primary Key (PK) | Unique identifier for each category |
| `nom_categorie`         | Attribute        | Name of the category                |
| `description_categorie` | Attribute        | Description of the category         |
