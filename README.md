OPGAVE 2 

Mit Http verb er POST og jeg har brugt dette URL: https://api.dropboxapi.com/2/files/create_folder_v2

Body request: 



<img width="385" alt="Skærmbillede 2023-09-06 kl  09 24 55" src="https://github.com/Jeppneu123/DropboxApi/assets/111861067/1a44aeb5-89f1-4491-9d85-49095093fa87">

Fra Api'en:



<img width="513" alt="Skærmbillede 2023-09-06 kl  09 24 59" src="https://github.com/Jeppneu123/DropboxApi/assets/111861067/b24f89c0-c9d8-4a29-a2f8-1ab3db4334d0">

At arbejde med Dropbox API i Postman følger i høj grad "uniform interface" i REST-principperne.
API-anmodninger bruger korrekte HTTP-metoder, hvilket er i overensstemmelse med principperne.
For at forbedre overensstemmelsen, kan din anmodninger blive bedre dokumenterede og nemt forståelige for andre udviklere, der arbejder med API'et.

OPGAVE 3 
Mit Http verb er POST og jeg har brugt dette URL: https://api.dropboxapi.com/2/files/get_metadata

Request body: 

<img width="401" alt="Skærmbillede 2023-09-06 kl  09 41 30" src="https://github.com/Jeppneu123/DropboxApi/assets/111861067/b8a8a68a-7520-4ccc-b009-be303269ff58">

Status kode: 

<img width="940" alt="Skærmbillede 2023-09-06 kl  09 41 34" src="https://github.com/Jeppneu123/DropboxApi/assets/111861067/af2cc75d-c535-4207-ac82-0393b23bcecb">

OPGAVE 4
Mit Http verb er POST og jeg har brugt dette URL: https://content.dropboxapi.com/2/files/upload

Inde under Body så skal man vælge binary, og uploade den fil man gerne vil have sendt med. Også under headers skal man skrive "Dropbox-Api-Arg" i key'en og {"path": "/testMappe/squares.png","mode": {".tag": "add"},"autorename": true} i value'en. Her vælger hvad den skal hedde inde under den mappe du har. 

OPGAVE 5

Mit Http verb er POST og jeg har brugt dette URL: https://api.dropboxapi.com/2/files/delete_v2

Stien på den fil:

<img width="342" alt="Skærmbillede 2023-09-06 kl  10 13 09" src="https://github.com/Jeppneu123/DropboxApi/assets/111861067/74df402d-5b61-4bfd-82cc-ca15dc36aaeb">

OPGAVE 7 

Mit Http verb er POST og jeg har brugt dette URL: https://api.dropboxapi.com/2/files/search_v2

Request Body: 

{
    "path": "/testmappe",
    "query": "test",
    "start": 0,
    "max_results": 10,
    "mode": {
        ".tag": "test"
    }
}

Response body: 

STATUS: 200 OK 

{
    "has_more": false,
    "matches": [
        {
            "match_type": {
                ".tag": "filename"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "folder",
                    "id": "id:7hUzmZRpR6AAAAAAAAAAGg",
                    "name": "TestMappe",
                    "path_display": "/TestMappe",
                    "path_lower": "/testmappe"
                }
            }
        },
        {
            "match_type": {
                ".tag": "filename"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "folder",
                    "id": "id:7hUzmZRpR6AAAAAAAAAAFw",
                    "name": "testmappe",
                    "path_display": "/Obligatorisk_Opgave/testmappe",
                    "path_lower": "/obligatorisk_opgave/testmappe"
                }
            }
        },
        {
            "match_type": {
                ".tag": "filename"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-06T08:18:01Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:7hUzmZRpR6AAAAAAAAAAHw",
                    "is_downloadable": true,
                    "name": "test.rtf",
                    "path_display": "/Obligatorisk_Opgave/testmappe/test.rtf",
                    "path_lower": "/obligatorisk_opgave/testmappe/test.rtf",
                    "rev": "604ac61cfd5cbfdd09240",
                    "server_modified": "2023-09-06T07:22:03Z",
                    "size": 401
                }
            }
        },
        {
            "match_type": {
                ".tag": "filename"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-06T08:18:01Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:7hUzmZRpR6AAAAAAAAAAHg",
                    "is_downloadable": true,
                    "name": "test 2 .rtf",
                    "path_display": "/Obligatorisk_Opgave/testmappe/test 2 .rtf",
                    "path_lower": "/obligatorisk_opgave/testmappe/test 2 .rtf",
                    "rev": "604ac61c80d3ffdd09240",
                    "server_modified": "2023-09-06T07:22:03Z",
                    "size": 401
                }
            }
        }
    ]
}

OPGAVE 8 

Mit Http verb er POST og jeg har brugt dette URL: https://api.dropboxapi.com/2/files/move_v2

Body request: 

{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/testmappe",
    "to_path": "/Obligatorisk_Opgave"
}

Her rykker jeg alle .txt filerne fra testmappe til Obligatorisk_Opgave.

Opgave 9


Body request:

Mit Http verb er POST og jeg har brugt dette URL: https://api.dropboxapi.com/2/files/copy_v2

{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/Obligatorisk_Opgave/testmappe/test.rtf",
    "to_path": "/Obligatorisk_Opgave/test_kopi.rtf"
}

Her tager jeg fat i en fil i /testmappe og kopierer den og rykker den kopi ind i /Obligatorisk_Opgave


Opgave 10 

