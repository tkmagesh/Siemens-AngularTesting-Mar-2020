import { Bug } from '../bug-tracker/models/bug';

const bugs : Bug[] =  [
    {
        "id": 3,
        "name": "Data integrity checks failed",
        "isClosed": false,
        "createdAt": new Date("2020-12-11T10:39:20.648Z")
    },
    {
        "id": 5,
        "name": "User actions not recognized",
        "isClosed": true,
        "createdAt": new Date("2021-01-11T05:28:42.900Z")
    }
]

export default bugs;