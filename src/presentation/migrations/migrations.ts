import { Request, Response } from "express";
import {prisma} from '../../data/postgres';
const bcrypt = require('bcrypt');




export class MigrationController {
    constructor() {}

    public migration = async (req: Request, res: Response) => {

      await prisma.entrance.createMany({
        data:[
        {
        // 	id: 1,
           name : "A"
        },
        {
        //	id:2,
           name : "B"
        },
        {
        // 	id:3,
           name : "C"
        },
        {
        // 	id:4,
           name : "D"
        },
        {
        //   	id:5,
           name : "E"
        }
        ,
        {
        //   	id:5,
           name : "F"
        }
        ,
        {
        //   	id:5,
           name : "G"
        }
        ]
        })


        await prisma.routegeo.createMany({
          data:[
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '3',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '3',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '3',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '3',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '3',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '3',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18945965,
            latitude: -17.78099995,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '3',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '3',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: '3',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: '3',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '3',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '114',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '114',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18970784,
            latitude: -17.78041619,
            nrStand: '114',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18970788,
            latitude: -17.78043838,
            nrStand: '114',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '114',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '114',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '114',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974305,
            latitude: -17.78046970,
            nrStand: '114',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18973081,
            latitude: -17.78046870,
            nrStand: '114',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18920624,
            latitude: -17.78105315,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18947655,
            latitude: -17.78105695,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974305,
            latitude: -17.78046970,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18973081,
            latitude: -17.78046870,
            nrStand: '114',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '114',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '114',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18979921,
            latitude: -17.78044400,
            nrStand: '114',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '114',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974305,
            latitude: -17.78046970,
            nrStand: '114',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18973081,
            latitude: -17.78046870,
            nrStand: '114',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18990457,
            latitude: -17.78101969,
            nrStand: '103A',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '103A',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '103A',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '103A',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18981158,
            latitude: -17.78052844,
            nrStand: '103A',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '103A',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '103A',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '103A',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18981158,
            latitude: -17.78052844,
            nrStand: '103A',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18945965,
            latitude: -17.78099995,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18981158,
            latitude: -17.78052844,
            nrStand: '103A',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18979921,
            latitude: -17.78044400,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18981158,
            latitude: -17.78052844,
            nrStand: '103A',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '58',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18985084,
            latitude: -17.78098658,
            nrStand: '58',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18945965,
            latitude: -17.78099995,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985081,
            latitude: -17.78099954,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985084,
            latitude: -17.78098658,
            nrStand: '58',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '58',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '58',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '58',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18985081,
            latitude: -17.78099954,
            nrStand: '58',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18985084,
            latitude: -17.78098658,
            nrStand: '58',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18985081,
            latitude: -17.78099954,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18985084,
            latitude: -17.78098658,
            nrStand: '58',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '99',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '99',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '99',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '99',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18978449,
            latitude: -17.78052861,
            nrStand: '99',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '99',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '99',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '99',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18978449,
            latitude: -17.78052861,
            nrStand: '99',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18979921,
            latitude: -17.78044400,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18979730,
            latitude: -17.78052843,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18978449,
            latitude: -17.78052861,
            nrStand: '99',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '117',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '117',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '117',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '117',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18964117,
            latitude: -17.78041609,
            nrStand: '117',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18964116,
            latitude: -17.78039584,
            nrStand: '117',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '117',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '117',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18964117,
            latitude: -17.78041609,
            nrStand: '117',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18964116,
            latitude: -17.78039584,
            nrStand: '117',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18964117,
            latitude: -17.78041609,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18964116,
            latitude: -17.78039584,
            nrStand: '117',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '117',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '117',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '117',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '117',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18964117,
            latitude: -17.78041609,
            nrStand: '117',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18964116,
            latitude: -17.78039584,
            nrStand: '117',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '56',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18986895,
            latitude: -17.78106447,
            nrStand: '56',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '56',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '56',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '56',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: '56',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18986895,
            latitude: -17.78106447,
            nrStand: '56',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18986895,
            latitude: -17.78106447,
            nrStand: '56',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18986895,
            latitude: -17.78106447,
            nrStand: '56',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '65',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: '65',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '65',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18979292,
            latitude: -17.78083999,
            nrStand: '65',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18980735,
            latitude: -17.78084098,
            nrStand: '65',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '65',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '65',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18979292,
            latitude: -17.78083999,
            nrStand: '65',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980735,
            latitude: -17.78084098,
            nrStand: '65',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18979921,
            latitude: -17.78044400,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18979292,
            latitude: -17.78083999,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18980735,
            latitude: -17.78084098,
            nrStand: '65',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18979292,
            latitude: -17.78083999,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18980735,
            latitude: -17.78084098,
            nrStand: '65',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '67',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: '67',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '67',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974228,
            latitude: -17.78087138,
            nrStand: '67',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18972448,
            latitude: -17.78087140,
            nrStand: '67',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948976,
            latitude: -17.78070857,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974273,
            latitude: -17.78071053,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974228,
            latitude: -17.78087138,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18972448,
            latitude: -17.78087140,
            nrStand: '67',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '67',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '67',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '67',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '67',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974228,
            latitude: -17.78087138,
            nrStand: '67',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972448,
            latitude: -17.78087140,
            nrStand: '67',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '67',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '67',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '67',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '67',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974228,
            latitude: -17.78087138,
            nrStand: '67',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972448,
            latitude: -17.78087140,
            nrStand: '67',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '79',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: '79',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '79',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974267,
            latitude: -17.78075050,
            nrStand: '79',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18972613,
            latitude: -17.78075245,
            nrStand: '79',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18984606,
            latitude: -17.78041642,
            nrStand: '79',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '79',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '79',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '79',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974267,
            latitude: -17.78075050,
            nrStand: '79',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972613,
            latitude: -17.78075245,
            nrStand: '79',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '79',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '79',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '79',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '79',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18974267,
            latitude: -17.78075050,
            nrStand: '79',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18972613,
            latitude: -17.78075245,
            nrStand: '79',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18974267,
            latitude: -17.78075050,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18972613,
            latitude: -17.78075245,
            nrStand: '79',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '128',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '128',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: '128',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18943449,
            latitude: -17.78052117,
            nrStand: '128',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18944801,
            latitude: -17.78052120,
            nrStand: '128',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '128',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: '128',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18943449,
            latitude: -17.78052117,
            nrStand: '128',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18944801,
            latitude: -17.78052120,
            nrStand: '128',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18949437,
            latitude: -17.78052020,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18947623,
            latitude: -17.78051928,
            nrStand: '128',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18945965,
            latitude: -17.78099995,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18943473,
            latitude: -17.78050594,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18944801,
            latitude: -17.78052120,
            nrStand: '128',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '132',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: '132',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18943473,
            latitude: -17.78050594,
            nrStand: '132',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18942237,
            latitude: -17.78050503,
            nrStand: '132',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '132',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '132',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: '132',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18943473,
            latitude: -17.78050594,
            nrStand: '132',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18942237,
            latitude: -17.78050503,
            nrStand: '132',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946676,
            latitude: -17.78044311,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18943574,
            latitude: -17.78044280,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18943473,
            latitude: -17.78050594,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18942237,
            latitude: -17.78050503,
            nrStand: '132',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18945965,
            latitude: -17.78099995,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18943473,
            latitude: -17.78050594,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18942237,
            latitude: -17.78050503,
            nrStand: '132',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18975538,
            latitude: -17.78045212,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18949109,
            latitude: -17.78065445,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18947400,
            latitude: -17.78065442,
            nrStand: '146',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '146',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '146',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949109,
            latitude: -17.78065445,
            nrStand: '146',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18947400,
            latitude: -17.78065442,
            nrStand: '146',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18949109,
            latitude: -17.78065445,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18947400,
            latitude: -17.78065442,
            nrStand: '146',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '146',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '146',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '146',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949109,
            latitude: -17.78065445,
            nrStand: '146',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18947400,
            latitude: -17.78065442,
            nrStand: '146',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '124',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '124',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '124',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '124',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '124',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18952487,
            latitude: -17.78043924,
            nrStand: '124',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '124',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '124',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '124',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18952487,
            latitude: -17.78043924,
            nrStand: '124',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18952487,
            latitude: -17.78043924,
            nrStand: '124',
            nameEntrance: 'E'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '124',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '124',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '124',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949560,
            latitude: -17.78046969,
            nrStand: '124',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18950673,
            latitude: -17.78046961,
            nrStand: '124',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: '119',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '119',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '119',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18952679,
            latitude: -17.78039635,
            nrStand: '119',
            nameEntrance: 'G'
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18976968,
            latitude: -17.78044351,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18952679,
            latitude: -17.78039635,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: '119',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: '119',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: '119',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: '119',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '119',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18952679,
            latitude: -17.78039635,
            nrStand: '119',
            nameEntrance: 'C'
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102891,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18990509,
            latitude: -17.78100001,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18974210,
            latitude: -17.78044305,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18952596,
            latitude: -17.78041590,
            nrStand: '119',
            nameEntrance: 'A'
          },
          {
            longitude: -63.18952679,
            latitude: -17.78039635,
            nrStand: '119',
            nameEntrance: 'A'
          },

          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946676,
            latitude: -17.78044311,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18943574,
            latitude: -17.78044280,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18917853,
            latitude: -17.78098488,
            nrStand: "1",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "1",
            nameEntrance: "G"
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: "1",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "1",
            nameEntrance: "G"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "1",
            nameEntrance: "G"
          },
          {
            longitude: -63.18917853,
            latitude: -17.78098488,
            nrStand: "1",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "1",
            nameEntrance: "C"
          },
          {
            longitude: -63.18917853,
            latitude: -17.78098488,
            nrStand: "1",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18917853,
            latitude: -17.78098488,
            nrStand: "1",
            nameEntrance: "E"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "3A",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "3A",
            nameEntrance: "G"
          },
          {
            longitude: -63.18975217,
            latitude: -17.78041426,
            nrStand: "3A",
            nameEntrance: "G"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "3A",
            nameEntrance: "A"
          },
          {
            longitude: -63.18978881,
            latitude: -17.78041519,
            nrStand: "3A",
            nameEntrance: "A"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "3A",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "3A",
            nameEntrance: "E"
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: "3A",
            nameEntrance: "E"
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: "3A",
            nameEntrance: "E"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "3A",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "3A",
            nameEntrance: "C"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "3A",
            nameEntrance: "C"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "3A",
            nameEntrance: "C"
          },
          {
            longitude: -63.18975217,
            latitude: -17.78041426,
            nrStand: "3A",
            nameEntrance: "C"
          },

          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "6",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "6",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946676,
            latitude: -17.78044311,
            nrStand: "6",
            nameEntrance: "A"
          },
          {
            longitude: -63.18943574,
            latitude: -17.78044280,
            nrStand: "6",
            nameEntrance: "A"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "6",
            nameEntrance: "A"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "6",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "6",
            nameEntrance: "G"
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: "6",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "6",
            nameEntrance: "G"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "6",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "6",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "6",
            nameEntrance: "C"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "6",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "6",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "6",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "6",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "6",
            nameEntrance: "E"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "6",
            nameEntrance: "E"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "6",
            nameEntrance: "E"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "6",
            nameEntrance: "E"
          },

          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "7",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "7",
            nameEntrance: "A"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "7",
            nameEntrance: "A"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "7",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "7",
            nameEntrance: "G"
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: "7",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "7",
            nameEntrance: "G"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "7",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "7",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "7",
            nameEntrance: "C"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "7",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18924880,
            latitude: -17.78099938,
            nrStand: "7",
            nameEntrance: "E"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "13",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "13",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946676,
            latitude: -17.78044311,
            nrStand: "13",
            nameEntrance: "A"
          },
          {
            longitude: -63.18943574,
            latitude: -17.78044280,
            nrStand: "13",
            nameEntrance: "A"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "13",
            nameEntrance: "A"
          },
          {
            longitude: -63.18930650,
            latitude: -17.78099954,
            nrStand: "13",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "13",
            nameEntrance: "G"
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: "13",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "13",
            nameEntrance: "G"
          },
          {
            longitude: -63.18930650,
            latitude: -17.78099954,
            nrStand: "13",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "13",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "13",
            nameEntrance: "C"
          },
          {
            longitude: -63.18930650,
            latitude: -17.78099954,
            nrStand: "13",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18930650,
            latitude: -17.78099954,
            nrStand: "13",
            nameEntrance: "E"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "16",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "16",
            nameEntrance: "A"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "16",
            nameEntrance: "A"
          },
          {
            longitude: -63.18933926,
            latitude: -17.78099962,
            nrStand: "16",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "16",
            nameEntrance: "G"
          },
          {
            longitude: -63.18943610,
            latitude: -17.78042052,
            nrStand: "16",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942682,
            latitude: -17.78099986,
            nrStand: "16",
            nameEntrance: "G"
          },
          {
            longitude: -63.18933926,
            latitude: -17.78099962,
            nrStand: "16",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "16",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "16",
            nameEntrance: "C"
          },
          {
            longitude: -63.18933926,
            latitude: -17.78099962,
            nrStand: "16",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18933926,
            latitude: -17.78099962,
            nrStand: "16",
            nameEntrance: "E"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18947655,
            latitude: -17.78105695,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18942846,
            latitude: -17.78105628,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18942746,
            latitude: -17.78113185,
            nrStand: "24",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18947655,
            latitude: -17.78105695,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942846,
            latitude: -17.78105628,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18942746,
            latitude: -17.78113185,
            nrStand: "24",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "24",
            nameEntrance: "C"
          },
          {
            longitude: -63.18920624,
            latitude: -17.78105315,
            nrStand: "24",
            nameEntrance: "C"
          },
          {
            longitude: -63.18942846,
            latitude: -17.78105628,
            nrStand: "24",
            nameEntrance: "C"
          },
          {
            longitude: -63.18942746,
            latitude: -17.78113185,
            nrStand: "24",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18947655,
            latitude: -17.78105695,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18942846,
            latitude: -17.78105628,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18942746,
            latitude: -17.78113185,
            nrStand: "24",
            nameEntrance: "E"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "30",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "30",
            nameEntrance: "A"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "30",
            nameEntrance: "A"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "30",
            nameEntrance: "A"
          },
          {
            longitude: -63.18951774,
            latitude: -17.78102809,
            nrStand: "30",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "30",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "30",
            nameEntrance: "G"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "30",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "30",
            nameEntrance: "G"
          },
          {
            longitude: -63.18951774,
            latitude: -17.78102809,
            nrStand: "30",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "30",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "30",
            nameEntrance: "C"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "30",
            nameEntrance: "C"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "30",
            nameEntrance: "C"
          },
          {
            longitude: -63.18951774,
            latitude: -17.78102809,
            nrStand: "30",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "30",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "30",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "30",
            nameEntrance: "E"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "30",
            nameEntrance: "E"
          },
          {
            longitude: -63.18951774,
            latitude: -17.78102809,
            nrStand: "30",
            nameEntrance: "E"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "60",
            nameEntrance: "A"
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: "60",
            nameEntrance: "A"
          },
          {
            longitude: -63.18979127,
            latitude: -17.78095764,
            nrStand: "60",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "60",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "60",
            nameEntrance: "G"
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: "60",
            nameEntrance: "G"
          },
          {
            longitude: -63.18979127,
            latitude: -17.78095764,
            nrStand: "60",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.78099930,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103000,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18979127,
            latitude: -17.78095764,
            nrStand: "60",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.78102890,
            nrStand: "60",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "60",
            nameEntrance: "E"
          },
          {
            longitude: -63.18979069,
            latitude: -17.78099901,
            nrStand: "60",
            nameEntrance: "E"
          },
          {
            longitude: -63.18979127,
            latitude: -17.78095764,
            nrStand: "60",
            nameEntrance: "E"
          },
          {
            longitude: -63.18985579,
            latitude: -17.78041643,
            nrStand: "61",
            nameEntrance: "A"
          },
          {
            longitude: -63.18980016,
            latitude: -17.78041634,
            nrStand: "61",
            nameEntrance: "A"
          },
          {
            longitude: -63.18979921,
            latitude: -17.78044401,
            nrStand: "61",
            nameEntrance: "A"
          },
          {
            longitude: -63.1897421,
            latitude: -17.78044305,
            nrStand: "61",
            nameEntrance: "A"
          },
          {
            longitude: -63.1897423,
            latitude: -17.78092278,
            nrStand: "61",
            nameEntrance: "A"
          },
          {
            longitude: -63.18946992,
            latitude: -17.78033721,
            nrStand: "61",
            nameEntrance: "G"
          },
          {
            longitude: -63.18949692,
            latitude: -17.78041586,
            nrStand: "61",
            nameEntrance: "G"
          },
          {
            longitude: -63.18972972,
            latitude: -17.78041623,
            nrStand: "61",
            nameEntrance: "G"
          },
          {
            longitude: -63.1897421,
            latitude: -17.78044305,
            nrStand: "61",
            nameEntrance: "G"
          },
          {
            longitude: -63.1897423,
            latitude: -17.78092278,
            nrStand: "61",
            nameEntrance: "G"
          },
          {
            longitude: -63.18914766,
            latitude: -17.78102462,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.18921959,
            latitude: -17.7809993,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.18948264,
            latitude: -17.78100001,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.18949321,
            latitude: -17.78102785,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.18971592,
            latitude: -17.78103,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.1897423,
            latitude: -17.78092278,
            nrStand: "61",
            nameEntrance: "C"
          },
          {
            longitude: -63.18990433,
            latitude: -17.7810289,
            nrStand: "61",
            nameEntrance: "E"
          },
          {
            longitude: -63.18987082,
            latitude: -17.78099971,
            nrStand: "61",
            nameEntrance: "E"
          },
          {
            longitude: -63.18974234,
            latitude: -17.78099859,
            nrStand: "61",
            nameEntrance: "E"
          },
          {
            longitude: -63.1897423,
            latitude: -17.78092278,
            nrStand: "61",
            nameEntrance: "E"
          }
          
          

          

          





          ]
          })


          await prisma.pointgeo.createMany({
            data:[
            {
            // 	id: 1,
              longitude: -63.1892343,
               latitude: -17.78094908, 
               order: 1,
               stand_id: 1
            },
            {
            // 	id: 2,
              longitude: -63.18920631,
               latitude: -17.78094931, 
               order: 2	,
               stand_id: 1
            },
            {
            // 	id: 3,
              longitude: -63.18920632,
               latitude: -17.78098488, 
               order: 3,
               stand_id: 1
            
            },
            {
            // 	id: 4,
               longitude: -6318923472,
               latitude: -17.78098488,
               order: 4,
               stand_id: 1
            },
            {
            // 	id: 13,
               longitude: -63.18973123,
               latitude: -17.78043808,
               order: 1,
               stand_id: 2
            },
            {
              longitude: -63.18969304,
               latitude: -17.78043856,
               order: 2,
              stand_id: 2
            },
            {
              longitude: -63.18969185,
               latitude: -17.78049346,
               order: 3,
               stand_id: 2
            },
            {
              longitude: -63.18973048,
               latitude: -17.78049332,
               order: 4,
              stand_id: 2
            },
            {
            // 	id: 17,
               longitude: -63.18986126,
               latitude: -17.78051696,
               order: 1,
               stand_id: 3
            },
            {
            // 	id: 18,
               longitude: -63.18986126,
               latitude: -17.7805479,
               order: 2,
              stand_id: 3
            },
            {
            // 	id: 19,
               longitude: -63.18981128,
               latitude: -17.7805473,
               order: 3,
               stand_id: 3
            },
            
            
            {
            // 	id: 20,
               longitude: -63.18981175,
               latitude: -17.78051815,
               order: 4,
              stand_id: 3
            },
            {
            // 	id: 21,
               longitude: -63.18978481,
               latitude: -17.78050815,
               order: 1,
               stand_id: 4
            },
            {
            // 	id: 22,
               longitude: -63.18975508,
               latitude: -17.78050855,
               order: 2,
              stand_id: 4
            },
            {
            
               longitude: -63.18975493,
               latitude: -17.78053587,
               order: 3,
               stand_id: 4
            },
            {
            // 	id: 24,
               longitude: -63.18978438,
               latitude: -17.7805355,
               order: 4,
              stand_id: 4
            },
            {
            
               longitude: -63.1896584582725,
               latitude: -17.7803388704423,
               order: 1,
               stand_id: 5
            },
            {
              longitude: -63.189658457361,
               latitude: -17.7803957619536,
               order: 2,
              stand_id: 5
            },
            {
              longitude: -63.1896253313436,
               latitude: -17.7803959107231,
               order: 3,
               stand_id: 5
            },
            {
              longitude: -63.1896259776,
               latitude: -17.7803390353185,
               order: 4,
              stand_id: 5
            },
            {
               longitude: -63.18947643,
               latitude: -17.78050689,
               order: 1,
               stand_id: 6
            },
            {
              longitude: -63.18944825,
               latitude: -17.78050637,
               order: 2,
              stand_id: 6
            },
            {
               longitude: -63.18944781,
               latitude: -17.78053309,
               order: 3,
               stand_id: 6
            },
            {
              longitude: -63.18947600,
               latitude: -17.78053334,
               order: 4,
              stand_id: 6
            },
            {
               longitude: -63.18942265,
               latitude: -17.78049188,
               order: 1,
               stand_id: 7
            },
            {
              longitude: -63.18938127,
               latitude: -17.78049149,
               order: 2,
              stand_id: 7
            },
            {
              longitude: -63.18938139,
               latitude: -17.78051856,
               order: 3,
               stand_id: 7
            },
            
            
            {
            // 	id: 36,
               longitude: -63.18942208,
               latitude: -17.78051874,
               order: 4,
              stand_id: 7
            },
            {
            // 	id: 37,
               longitude: -63.18947422,
               latitude: -17.78064122,
               order: 1,
               stand_id: 8
            },
            {
            // 	id: 38,
               longitude: -63.18944604,
               latitude: -17.78064147,
               order: 2,
              stand_id: 8
            },
            {
            // 	id: 39,
               longitude: -63.18944557,
               latitude: -17.78066973,
               order: 3,
               stand_id: 8
            },
            {
            // 	id: 40,
               longitude: -63.18947377,
               latitude: -17.78066865,
               order: 4,
              stand_id: 8
            },
            {
               longitude: -63.18954847,
               latitude: -17.78043887,
               order: 1,
               stand_id: 9
            },
            {
            // 	id: 42,
               longitude: -63.18954772,
               latitude: -17.78049357,
               order: 2,
              stand_id: 9
            },
            {
            // 	id: 43,
               longitude: -63.18950645,
               latitude: -17.78049332,
               order: 3,
               stand_id: 9
            },
            {
            // 	id: 44,
               longitude:  -63.18950708,
               latitude: -17.78043951,
               order: 4,
              stand_id: 9
            },
            {
            // 	id: 45,
               longitude: -63.18962633,
               latitude: -17.78032904,
               order: 1,
               stand_id: 10
            },
            {
            // 	id: 46,
               longitude: -63.18949606,
               latitude: -17.7803294,
               order: 2,
              stand_id: 10
            },
            {
            // 	id: 47,
               longitude: -63.18949427,
               latitude: -17.7803965,
               order: 3,
               stand_id: 10
            },
            {
            // 	id: 48,
               longitude: -63.1896253313436,
               latitude: -17.7803959107231,
               order: 4,
              stand_id: 10
            },
            
            
            
            
            {
            // 	id: 49,
               longitude: -63.18990267,
               latitude: -17.78106472,
               order: 1,
               stand_id: 11
            },
            {
            // 	id: 50,
               longitude: -63.18984408,
               latitude: -17.78106428,
               order: 2,
              stand_id: 11
            },
            {
            // 	id: 51,
               longitude: -63.18984452,
               latitude: -17.78110112,
               order: 3,
               stand_id: 11
            },
            {
            // 	id: 52,
               longitude: -63.18990231,
               latitude: -17.78110112,
               order: 4,
              stand_id: 11
            },
            {
            // 	id: 53,
               longitude: -63.18984699,
               latitude: -17.78092088,
               order: 1,
               stand_id: 12
            },
            {
            // 	id: 54,
               longitude: -63.18984699,
               latitude: -17.78094646,
               order: 2,
              stand_id: 12
            },
            {
            // 	id: 55,
               longitude: -63.18990528,
               latitude: -17.78094705,
               order: 3,
               stand_id: 12
            },
            {
            // 	id: 56,
               longitude: -63.18990469,
               latitude: -17.78098691,
               order: 4,
              stand_id: 12
            },
            
            
            
            {
            // 	id: 57,
               longitude: -63.18980535,
               latitude: -17.78098631,
               order: 5,
               stand_id: 12
            },
            {
            // 	id: 58,
               longitude: -63.18980625,
               latitude: -17.78092088,
               order: 6,
              stand_id: 12
            },
            {
            // 	id: 59,
               longitude: -63.1898082,
               latitude: -17.7807794,
               order: 1,
               stand_id: 13
            },
            {
            // 	id: 60,
               longitude: -63.18984937,
               latitude: -17.78077989,
               order: 2,
              stand_id: 13
            },
            {
            // 	id: 61,
               longitude: -63.18985829,
               latitude: -17.78077989,
               order: 3,
               stand_id: 13
            },
            {
            // 	id: 62,
               longitude: -63.1898571,
               latitude: -17.78081261,
               order: 4,
              stand_id: 13
            },
            {
            // 	id: 31,
               longitude: -63.18984699,
               latitude: -1778081202,
               order: 5,
               stand_id: 13
            },
            {
            // 	id: 32,
               longitude: -63.18984877,
               latitude: -17.78086318,
               order: 6,
              stand_id: 13
            },
            
            
            
            {
            // 	id: 29,
               longitude: -63.1898571,
               latitude: -17.78086318,
               order: 7,
               stand_id: 13
            },
            {
            // 	id: 30,
               longitude: -63.18985591,
               latitude: -17.78089411,
               order: 8,
              stand_id: 13
            },
            {
            // 	id: 31,
               longitude: -63.18984699,
               latitude: -17.78089351,
               order: 9,
               stand_id: 13
            },
            {
            // 	id: 32,
               longitude: -63.18980663,
               latitude: -17.78089351,
               order: 10,
              stand_id: 13
            },
            {
            // 	id: 29,
               longitude: -63.18972494,
               latitude: -17.78083863,
               order: 1,
               stand_id: 14
            },
            {
            // 	id: 30,
               longitude: -6318972394,
               latitude: -17.78091112,
               order: 2,
              stand_id: 14
            },
            {
            // 	id: 31,
               longitude: -63.18968725,
               latitude: -17.78091112,
               order: 3,
               stand_id: 14
            },
            {
            // 	id: 32,
               longitude: -6318968744,
               latitude: -63.18968744,
               order: 4,
              stand_id: 14
            },
            
            
            
            {
            // 	id: 29,
               longitude: -63.18963102,
               latitude: -17.78089209,
               order: 5,
               stand_id: 14
            },
            {
            // 	id: 30,
               longitude: -63.18963129,
               latitude: -17.78083736,
               order: 6,
              stand_id: 14
            },
            {
            // 	id: 31,
               longitude: -63.18968554,
               latitude: -17.78083783,
               order: 7,
               stand_id: 14
            },
            {
            // 	id: 32,
               longitude: -63.18972647,
               latitude: -17.7807279,
               order: 1,
              stand_id: 15
            },
            {
            // 	id: 29,
               longitude: -63.18968744,
               latitude: -17.78072885,
               order: 2,
               stand_id: 15
            },
            {
            // 	id: 30,
               longitude: -63.18968653,
               latitude: -17.78078143,
               order: 3,
              stand_id: 15
            },
            {
            // 	id: 31,
               longitude: -63.18972574,
               latitude: -17.78078081,
               order: 4,
               stand_id: 15
            },
            {
            // 	id: 32,
               longitude: -63.1892033386921,
               latitude: -17.7810644664465,
               order: 1,
              stand_id: 16
            },
            
            
            
            {
            // 	id: 29,
               longitude: -63.1892033486295,
               latitude: -17.7811027744569,
               order: 2,
               stand_id: 16
            },
            {
            // 	id: 30,
               longitude: -63.189143261538,
               latitude: -17.7811032629699,
               order: 3,
              stand_id: 16
            },
            {
            // 	id: 31,
               longitude: -63.1891444512685,
               latitude: -17.7810645967285,
               order: 4,
               stand_id: 16
            },
            {
            // 	id: 32,
               longitude: -63.18929257,
               latitude: -17.7809486,
               order: 1,
              stand_id: 17
            },
            {
            // 	id: 29,
               longitude: -63.18926162,
               latitude: -17.78094885,
               order: 2,
               stand_id: 17
            },
            {
            // 	id: 30,
               longitude: -63.1892612,
               latitude: -17.78098488,
               order: 3,
              stand_id: 17
            },
            {
            // 	id: 31,
               longitude: -63.18929257,
               latitude: -17.8098488,
               order: 4,
               stand_id: 17
            },
            
            
            
            
            
            
            
            
            
            
            {
            // 	id: 32,
               longitude: -63.18932278,
               latitude: -17.78098488,
               order: 1,
              stand_id: 18
            },
            
            {
            // 	id: 32,
               longitude: -63.18932232,
               latitude: -17.78093849,
               order: 2,
              stand_id: 18
            },
            {
            // 	id: 29,
               longitude: -63.18929317,
               latitude: -17.78093968,
               order: 3,
               stand_id: 18
            },
            {
            // 	id: 30,
               longitude: -63.18929257,
               latitude: -17.78098488,
               order: 4,
              stand_id: 18
            },
            {
            // 	id: 31,
               longitude: -63.18931984,
               latitude: -17.78106421,
               order: 1,
               stand_id: 19
            },
            {
            // 	id: 32,
               longitude: -63.1892896,
               latitude: -17.78106428,
               order: 2,
              stand_id: 19
            },
            {
            // 	id: 29,
               longitude: -63.18929019,
               latitude: -17.7811104,
               order: 3,
               stand_id: 19
            },
            {
            // 	id: 30,
               longitude: -63.18931994,
               latitude: -17.7811104,
               order: 4,
              stand_id: 19
            },
            {
            // 	id: 31,
               longitude: -63.18946745,
               latitude: -17.7810991,
               order: 1,
               stand_id: 20
            },
            {
            // 	id: 32,
               longitude: -63.18944307,
               latitude: -17.7810991,
               order: 2,
              stand_id: 20
            },
            {
            // 	id: 29,
               longitude: -63.18944307,
               latitude: -1778112527,
               order: 3,
               stand_id: 20
            },
            {
            // 	id: 30,
               longitude: -63.18946687,
               latitude: -17.78112527,
               order: 4,
              stand_id: 20
            },



            //GUIDO SALAZAR VARGAS

            {
              // id: 30,
              longitude: -63.18932083,
              latitude: -17.78100987,
              order: 1,
              stand_id: 31
            },
            {
              // id: 30,
              longitude: -63.18929129,
              latitude: -17.78100987,
              order: 2,
              stand_id: 31
            },
            {
              // id: 30,
              longitude: -63.18929172,
              latitude: -17.78103927,
              order: 4,
              stand_id: 31
            },
            {
              // id: 30,
              longitude: -63.18932106,
              latitude: -17.78103936,
              order: 4,
              stand_id: 31
            },
            {
              // id: 30,
              longitude: -63.18986198,
              latitude: -17.78101332,
              order: 1,
              stand_id: 32
            },
            {
              // id: 30,
              longitude: -63.18983628,
              latitude: -17.78101332,
              order: 2,
              stand_id: 32
            },
            {
              // id: 30,
              longitude: -63.18983628,
              latitude: -17.78103866,
              order: 3,
              stand_id: 32
            },
            {
              // id: 30,
              longitude: -63.18986162,
              latitude: -17.78103866,
              order: 4,
              stand_id: 32
            },
            {
              // id: 30,
              longitude: -63.1892343,
              latitude: -17.78094908,
              order: 1,
              stand_id: 33
            },
            {
              // id: 30,
              longitude: -63.18920631,
              latitude: -17.78094931,
              order: 2,
              stand_id: 33
            },
            {
              // id: 30,
              longitude: -63.18920632,
              latitude: -17.78098488,
              order: 3,
              stand_id: 33
            },
            {
              // id: 30,
              longitude: -63.18923472,
              latitude: -17.78098488,
              order: 4,
              stand_id: 33
            },
            {
              // id: 30,
              longitude: -63.18926162,
              latitude: -17.78094885,
              order: 1,
              stand_id: 34
            },
            {
              // id: 30,
              longitude: -63.1892343,
              latitude: -17.78094908,
              order: 2,
              stand_id: 34
            },
            {
              // id: 30,
              longitude: -63.18923472,
              latitude: -17.78098488,
              order: 3,
              stand_id: 34
            },
            {
              // id: 30,
              longitude: -63.1892612,
              latitude: -17.78098488,
              order: 4,
              stand_id: 34
            },
            {
              // id: 30,
              longitude: -63.18926004,
              latitude: -17.78100987,
              order: 1,
              stand_id: 35
            },
            {
              // id: 30,
              longitude: -63.18923276,
              latitude: -17.78100987,
              order: 2,
              stand_id: 35
            },
            {
              // id: 30,
              longitude: -63.18923319,
              latitude: -17.7810391,
              order: 3,
              stand_id: 35
            },
            {
              // id: 30,
              longitude: -63.18925984,
              latitude: -17.78103918,
              order: 4,
              stand_id: 35
            },
            {
              // id: 30,
              longitude: -63.18934938,
              latitude: -17.78100987,
              order: 1,
              stand_id: 36
            },
            {
              // id: 30,
              longitude: -63.18932083,
              latitude: -17.78100987,
              order: 2,
              stand_id: 36
            },
            {
              // id: 30,
              longitude: -63.18932106,
              latitude: -17.78103936,
              order: 3,
              stand_id: 36
            },
            {
              // id: 30,
              longitude: -63.18934963,
              latitude: -17.78103945,
              order: 4,
              stand_id: 36
            },
            {
              // id: 30,
              longitude: -63.1894131,
              latitude: -17.78110167,
              order: 1,
              stand_id: 37
            },
            {
              // id: 30,
              longitude: -63.18937466,
              latitude: -17.78110148,
              order: 2,
              stand_id: 37
            },
            {
              // id: 30,
              longitude: -63.18937347,
              latitude: -17.78116156,
              order: 3,
              stand_id: 37
            },
            {
              // id: 30,
              longitude: -63.18941274,
              latitude: -17.78116156,
              order: 4,
              stand_id: 37
            },
            {
              // id: 30,
              longitude: -63.18953691,
              latitude: -17.78104794,
              order: 1,
              stand_id: 38
            },
            {
              // id: 30,
              longitude: -63.18949721,
              latitude: -17.78104794,
              order: 2,
              stand_id: 38
            },
            {
              // id: 30,
              longitude: -63.18949639,
              latitude: -17.78109989,
              order: 3,
              stand_id: 38
            },
            {
              // id: 30,
              longitude: -63.18953647,
              latitude: -17.78110088,
              order: 4,
              stand_id: 38
            },
            {
              // id: 30,
              longitude: -63.18977779,
              latitude: -17.78092909,
              order: 1,
              stand_id: 39
            },
            {
              // id: 30,
              longitude: -63.18974901,
              latitude: -17.78092872,
              order: 2,
              stand_id: 39
            },
            {
              // id: 30,
              longitude: -63.18974824,
              latitude: -17.78098393,
              order: 3,
              stand_id: 39
            },
            {
              // id: 30,
              longitude: -63.18977679,
              latitude: -17.78098274,
              order: 4,
              stand_id: 39
            },
            {
              // id: 30,
              longitude: -63.18972394,
              latitude: -17.78091112,
              order: 1,
              stand_id: 40
            },
            {
              // id: 30,
              longitude: -63.18968725,
              latitude: -17.78091112,
              order: 2,
              stand_id: 40
            },
            {
              // id: 30,
              longitude: -63.18968697,
              latitude: -17.78093778,
              order: 3,
              stand_id: 40
            },
            {
              // id: 30,
              longitude: -63.18972357,
              latitude: -17.78093778,
              order: 4,
              stand_id: 40
            },
            {
              // 	id:,
                longitude: -63.1897793,
                 latitude: -17.78084782, 
                 order:1, 
                 stand_id:41 
              },
              
              {
              // 	id:,
                longitude: -63.18975012 ,
                 latitude: -17.78084819 , 
                 order:2, 
                 stand_id: 41
              },
              
              {
              // 	id:,
                longitude: -63.18974976 ,
                 latitude: -17.78087458 , 
                 order:3, 
                 stand_id:41 
              },
              
              {
              // 	id:,
                longitude: -63.18977879,
                 latitude:  -17.78087496, 
                 order:4, 
                 stand_id: 41
              },
              
              {
              // 	id:,
                longitude: -63.18984937 ,
                 latitude: -17.78072814 , 
                 order:1, 
                 stand_id: 42
              },
              
              {
              // 	id:,
                longitude: -63.18980892 ,
                 latitude: -17.78072755, 
                 order:2,
                 stand_id: 42
              },
              
              {
              // 	id:,
                longitude: -63.1898082,
                 latitude: -17.7807794, 
                 order:3, 
                 stand_id: 42
              },
              
              {
              // 	id:,
                longitude: -63.18984937,
                 latitude: -17.78077989 , 
                 order:4, 
                 stand_id: 42
              },
              
              {
              // 	id:,
                longitude: -63.189729,
                 latitude: -17.78060298, 
                 order:1, 
                 stand_id: 43
              },
              
              {
              // 	id:,
                longitude: -63.18969078,
                 latitude: -17.78060227 , 
                 order:2, 
                 stand_id: 43
              },
              
              {
              // 	id:,
                longitude: -63.18968792,
                 latitude: -17.78068412, 
                 order:3, 
                 stand_id: 43
              },
              
              {
              // 	id:,
                longitude: -63.1897279 ,
                 latitude: -17.7806846 , 
                 order:4, 
                 stand_id: 43
              },
              
              {
              // 	id:,
                longitude: -63.1897294 ,
                 latitude: -17.78057324, 
                 order:1, 
                 stand_id:44 
              },
              
              {
              // 	id:,
                longitude: -63.18969111,
                 latitude: -17.78057324 , 
                 order:2, 
                 stand_id: 44
              },
              
              {
              // 	id:,
                longitude: -63.18969078,
                 latitude: -17.78060227, 
                 order:3, 
                 stand_id:44 
              },
              
              {
              // 	id:,
                longitude: -63.189729,
                 latitude: -17.78060298,
                 order:4, 
                 stand_id: 44
              },
              
              {
              // 	id:,
                longitude: -63.18986067,
                 latitude: -17.78059965 , 
                 order:1, 
                 stand_id: 45
              },
              
              {
              // 	id:,
                longitude: -63.18981041,
                 latitude: -17.78059987, 
                 order:2, 
                 stand_id: 45
              },
              
              {
              // 	id:,
                longitude: -63.18980995,
                 latitude: -17.7806282 , 
                 order:3, 
                 stand_id: 45
              },
              
              {
              // 	id:,
                longitude: -63.18986007,
                 latitude: -17.7806288, 
                 order:4, 
                 stand_id: 45
              },
              
              {
              // 	id:,
                longitude: -63.18972975,
                 latitude: -17.78054706 , 
                 order:1, 
                 stand_id: 46
              },
              
              {
              // 	id:,
                longitude: -63.18969142 ,
                 latitude: -17.78054706, 
                 order:2, 
                 stand_id: 46
              },
              
              {
              // 	id:,
                longitude: -63.18969111 ,
                 latitude: -17.78057324 , 
                 order:3, 
                 stand_id: 46
              },
              
              {
              // 	id:,
                longitude: -63.1897294 ,
                 latitude: -17.78057324 , 
                 order:4,
                 stand_id: 46
              },
              
              {
              // 	id:,
                longitude: -63.18973012 ,
                 latitude: -17.78051988 , 
                 order:1, 
                 stand_id: 47
              },
              
              {
              // 	id:,
                longitude: -63.18969173,
                 latitude: -17.78052019, 
                 order:2, 
                 stand_id: 47
              },
              
              {
              // 	id:,
                longitude: -63.18969142,
                 latitude: -17.78054706, 
                 order:3, 
                 stand_id: 47
              },
              
              {
              // 	id:,
                longitude: -63.18972975 ,
                 latitude: -17.78054706, 
                 order:4, 
                 stand_id: 47
              },
              
              {
              // 	id:,
                longitude: -63.18973048,
                 latitude: -17.78049332 , 
                 order:1, 
                 stand_id:48 
              },
              
              {
              // 	id:,
                longitude: -63.18961559,
                 latitude: -17.78049374 , 
                 order:2, 
                 stand_id: 48
              },
              
              {
              // 	id:,
                longitude: -63.18961511,
                 latitude: -17.78052082 , 
                 order:3, 
                 stand_id: 48
              },
              
              {
              // 	id:,
                longitude: -63.18973012,
                 latitude: -17.78051988, 
                 order:4, 
                 stand_id: 48
              },
              
              {
              // 	id:,
                longitude: -63.18969304 ,
                 latitude: -17.78043856, 
                 order:1, 
                 stand_id: 49
              },
              
              {
              // 	id:,
                longitude: -63.18961654,
                 latitude: -17.78043951, 
                 order:2, 
                 stand_id: 49
              },
              
              {
              // 	id:,
                longitude: -63.18961559,
                 latitude: -17.78049374, 
                 order:3, 
                 stand_id: 49
              },
              
              {
              // 	id:,
                longitude: -63.18969185,
                 latitude: -17.78049346, 
                 order:4, 
                 stand_id: 49
              },
              
              {
              // 	id:,
                longitude: -63.18957986,
                 latitude: -17.78043839, 
                 order:1, 
                 stand_id: 50
              },
              
              {
              // 	id:,
                longitude: -63.18954847,
                 latitude: -17.78043887, 
                 order:2, 
                 stand_id: 50
              },
              
              {
              // 	id:,
                longitude: -63.18954772,
                 latitude: -17.78049357, 
                 order:3, 
                 stand_id: 50
              },
              
              {
              // 	id:,
                longitude: -63.18957989,
                 latitude: -17.78049376, 
                 order:4, 
                 stand_id: 50
              },
              
              
            



  
            ]
            })
            

            




await prisma.stand.createMany({
  data:[
  {
  // 	id: 1,
     name: "Accesorios para celular",
    owner: "Alexia Mercer",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335270/bach6v1nwvazjtay0cjw.jpg",
    direction: "Centro Comercial Cañoto | Local #3",
    nr: "3" ,
    longitude: -63.18921676,
    latitude: -17.78097011,
     phone: "78452415",
     urlPage: "https://www.local3@gmail.com"
  },
  {
  // 	id: 2,
     name: "Hombre Elegante",
    owner: "Isabella Santiago",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335270/c6r3bulcdwybuahewnee.jpg",
    direction: "Centro Comercial Cañoto | Local #114",
  nr: "114",
    longitude: -63.18971005,
    latitude: -17.78046605,
     phone: "78452415",
     urlPage: "https://www.local114@gmail.com"
  },
  {
  // 	id: 3,
     name: "La plata joyas",
    owner: "Owen Lawson",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335270/dgwmfutcb7ag0wdouhcb.jpg",
    direction: "Centro Comercial Cañoto | Local #103A",
  nr : "103A",
    longitude: -63.18983437,
    latitude: -17.78053208,
     phone: "78452415",
     urlPage: "https://www.local103-A@gmail.com"
  },
  {
  // 	id: 4,
     name: "Solo para ti",
    owner: "Jasmine Alvarez",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335270/viczmt5i8vyor8lxrkqk.jpg",
    direction: "Centro Comercial Cañoto | Local #99",
  nr : "99",
  
    longitude: -63.18976953,
    latitude: -17.78052315,
     phone: "78452415",
     urlPage: "https://www.local99@gmail.com"
  },
  {
  // 	id: 5,
     name: "Mania T",
     nr : "117",
    owner: "Harrison Blake",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335269/kk0t4e27doxhf9wfrovl.jpg",
    direction: "Centro Comercial Cañoto | Local #117",
    longitude: -63.18963983,
    latitude: -17.78036579,
     phone: "78452415",
     urlPage: "https://www.local117@gmail.com"
  },
  {
  // 	id: 6,
     name: "Marias",
    owner: "Mia Rodriguez",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335269/hs2gxh6hwevplojyixc7.jpg",
    direction: "Centro Comercial Cañoto | Local #128",
  nr : "128",
    longitude: -63.18946185,
    latitude: -17.78051754,
     phone: "78452415",
     urlPage: "https://www.local128@gmail.com"
  },
  {
  // 	id: 7,
     name: "Helgo Style",
    owner: "Caleb Thornton",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335269/ejwmrivcrgefjhhkieyb.jpg",
    direction: "Centro Comercial Cañoto | Local #132",
  nr: "132",
    longitude: -63.18940296,
    latitude: -17.78050564,
     phone: "78452415",
     urlPage: "https://www.local132@gmail.com"
  },

  
  {
  // 	id: 8,
     name: "Bella Center",
    owner: "Felix Chambers",
    image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335269/wcu15m1qiojggdkobf9s.jpg",
    direction: "Centro Comercial Cañoto | Local #146",
    nr: "146",
    longitude: -63.18945887,
    latitude: -17.78065733,
     phone: "78452415",
     urlPage: "https://www.local146@gmail.com"
  },
  {

       name: "Nutrition Center",
      owner: "Scarlett Morgan",
      image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335269/wvwoejgd6nnnikzw1jbs.jpg",
      direction: "Centro Comercial Cañoto | Local #124",
      nr : "124",
      longitude: -63.1895255,
      latitude: -17.78046697,
       phone: "78452415",
       urlPage: "https://www.local124@gmail.com"
    },

    {
         name: "Ropa Medica",
        owner: "Jasper Brooks",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335268/jcgoxoikxphlevbbu0e2.jpg",
        direction: "Centro Comercial Cañoto | Local #119",
      nr :"119",
        longitude: -63.18956559,
        latitude: -17.78036293,
         phone: "78452415",
         urlPage: "https://www.local119@gmail.com"
      },
      {
      // 	id: 11,
         name: "Natyfa lluvia de Estilos",
        owner: "Elliott Cole",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335268/bcfxceqkaqdzcd7w4a75.jpg",
        direction: "Centro Comercial Cañoto | Local #56",
      nr :"56",
        longitude: -63.18987423,
        latitude: - -17.78108381,
         phone: "78452415",
         urlPage: "https://www.local56@gmail.com"
      },
      {
      // 	id: 12,
         name: "A.A.",
        owner: "Ava Montgomery",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335267/r3lj8vdptxqbijgnfhpj.jpg",
        direction: "Centro Comercial Cañoto | Local #58",
      nr :"58",
        longitude: -63.18985519,
        latitude: -17.78096484,
         phone: "78452415",
         urlPage: "https://www.local58@gmail.com"
      },
      {
      // 	id: 13,
         name: "Claudina",
        owner: "Penelope Hayes",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335267/hlznfy9rdn2eeacikhgb.jpg",
        direction: "Centro Comercial Cañoto | Local #65",
      nr :"65",
        longitude: -63.18982783,
        latitude: -17.78083599,
         phone: "78452415",
         urlPage: "https://www.local65@gmail.com"
      },
      {
      // 	id: 14,
         name: "Fotocopiadoras Moreira Bolivia",
        owner: "Xavier Castillo",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335267/hlznfy9rdn2eeacikhgb.jpg",
        direction: "Centro Comercial Cañoto | Local #67",
      nr :"67",
        longitude: -63.18967733,
        latitude: -17.78086609,
         phone: "78452415",
         urlPage: "https://www.local67@gmail.com"
      },
      {
      // 	id: 15,
         name: "SexyShop Americana",
        owner: "Felix Chambers",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335266/bwef8hpuiylbykait89h.jpg",
        direction: "Centro Comercial Cañoto | Local #79",
      nr :"79",
        longitude: -63.18970707,
        latitude: -17.78075426,
         phone: "78452415",
         urlPage: "https://www.local79@gmail.com"
      },{
      // 	id: 16,
         name: "Guajira Jeans",
        owner: "Caleb Thornton",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335266/rrwl7zll7kevnkonjmzq.jpg",
        direction: "Centro Comercial Cañoto | Local #2",
      nr :"2",
        longitude: -63.18917453,
        latitude: -17.78108409,
         phone: "78452415",
         urlPage: "https://www.local2@gmail.com"
      },
      {
      // 	id: 17,
         name: "Maxima Plus + Bolivia",
        owner: "Isabella Santiago",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335266/avsgrsjclaf8tzgxlvzv.jpg",
        direction: "Centro Comercial Cañoto | Local #9",
      nr :"9",
        longitude: -63.18927625,
        latitude: -17.78097011,
         phone: "78452415",
         urlPage: "https://www.local9@gmail.com"
      },
      {
      // 	id: 18,
         name: "Friki Center",
        owner: "Taylor Blake",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335265/he1n5wslwopgqsk4nwhs.jpg",
        direction: "Centro Comercial Cañoto | Local #12",
      nr :"12",
        longitude: -63.18930599,
        latitude: -17.78096476,
         phone: "78452415",
         urlPage: "https://www.local12@gmail.com"
      },
      {
      // 	id: 19,
         name: "Gorylas Style",
        owner: "Casey Quinn",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335265/lglm97vnpvwwg54fjqmk.jpg",
        direction: "Centro Comercial Cañoto | Local #14",
      nr :"14",
        longitude: -63.1893048,
        latitude: -17.78108706,
         phone: "78452415",
         urlPage: "https://www.local14@gmail.com"
      },
      {
      // 	id: 20,
         name: "Boutique Carlitos",
        owner: "Jordan Riley",
        image: "https://res.cloudinary.com/da9xsfose/image/upload/v1703335267/hlznfy9rdn2eeacikhgb.jpg",
        direction: "Centro Comercial Cañoto | Local #25",
      nr :"25",
        longitude: -63.1894559,
        latitude: -17.78111264,
         phone: "78452415",
         urlPage: "https://www.local25@gmail.com"
      },


      //Moises
      {
        // 	id: 41,
           name: "Ella Y El",
          owner: "Ana Martínez",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703518557/comercial%20ca%C3%B1oto/cf9ow99zab8upkk4snc5.jpg",
          direction: "Centro Comercial Cañoto | Local #69",
        nr : "69",
          longitude: -63.18976478 ,
          latitude: -17.78086312,
           phone: "71037772",
           urlPage: "https://www.local69@gmail.com"
        },
        {
        // 	id:42 ,
           name: "JULIUS",
          owner: "Carlos Rodríguez",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703513392/comercial%20ca%C3%B1oto/eqogkifvltujy3b8e9yu.jpg",
          direction: "Centro Comercial Cañoto | Local #77",
        nr : "77",
          longitude: -63.18983021,
          latitude: -17.78075277,
           phone: "70977462",
           urlPage: "https://www.local77@gmail.com"
        },
        {
        // 	id: 43,
           name: "PATRICIA",
          owner: "María García",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703519082/comercial%20ca%C3%B1oto/pc9bbhfdqronky6fcs4m.jpg",
          direction: "Centro Comercial Cañoto | Local #83",
        nr : "83",
          longitude: -63.18971064,
          latitude: -17.78064332,
           phone: "72681334",
           urlPage: "https://www.local83@gmail.com"
        },
        {
        // 	id: 44,
           name: "JUGUETERIA ROSITA",
          owner: "Javier López",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703526347/comercial%20ca%C3%B1oto/rcovjde2zztmylwm9ad2.jpg",
          direction: "Centro Comercial Cañoto | Local #89",
        nr : "89",
          longitude: -63.18971064,
          latitude: -17.78058799,
           phone: "76018085",
           urlPage:"https://www.local89@gmail.com"
        },
        {
        // 	id: 45,
           name: "ANGELICA",
          owner: "Laura Fernández",
          image: "https://res.cloudinary.com/dm8a74pty/image/upload/v1703526715/comercial%20ca%C3%B1oto/rwl87ba4bohlpms23b9k.jpg",
          direction: "Centro Comercial Cañoto | Local #92",
        nr : "92",
          longitude: -63.18983318,
          latitude: -17.78061714,
           phone: "75009197",
           urlPage: "https://www.local92@gmail.com"
        },
        {
        // 	id: 46,
           name: "ABOGADOS SUCESORES",
          owner: "Roberto Sánchez",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703526963/comercial%20ca%C3%B1oto/affb6fxcjuax4hd7rlsc.jpg",
          direction: "Centro Comercial Cañoto | Local #94",
        nr : "94",
          longitude: -63.18971064,
          latitude: -17.78055944,
           phone: "70815116",
           urlPage: "https://www.local94@gmail.com"
        },
        {
        // 	id: 47,
           name: "AR & SV",
          owner: "Patricia Ramírez",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703528715/comercial%20ca%C3%B1oto/xcpb8vdxgsmksimtiwfn.jpg",
          direction: "Centro Comercial Cañoto | Local #95",
        nr : "95",
          longitude: -63.18971064 ,
          latitude: -17.78053029,
           phone: "70890578",
           urlPage: "https://www.local95@gmail.com"
        },
        {
        // 	id: 48,
           name: "SONIA",
          owner: "Miguel González",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703528974/comercial%20ca%C3%B1oto/wxvacuefsmnp1bhi0kmz.jpg",
          direction: "Centro Comercial Cañoto | Local #101",
        nr : "101",
          longitude: -63.18967257,
          latitude: -17.7805065,
           phone: "72186782",
           urlPage: "https://www.local101@gmail.com"
        },
        {
        // 	id: 49,
           name: "CRISTALERIA MARGARITA",
          owner: "Miguel González",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703529235/comercial%20ca%C3%B1oto/gwtubkyugshqj5fhe2ll.jpg",
          direction: "Centro Comercial Cañoto | Local #116",
        nr : "116",
          longitude: -63.18965294 ,
          latitude: -17.78046486,
           phone: "78129401",
           urlPage: "https://www.local116@gmail.com"
        },
        {
        // 	id: 50,
           name: "L y M Outlet",
          owner: "Marta Ruiz",
          image:"https://res.cloudinary.com/dm8a74pty/image/upload/v1703529428/comercial%20ca%C3%B1oto/gdo5myrdpnsbfc113upr.jpg",
          direction: "Centro Comercial Cañoto | Local #122",
        nr : "122",
          longitude: -63.18956119,
          latitude: -17.78046638,
           phone: "72121644",
           urlPage: "https://www.local122@gmail.com"
        },
        
      
    

  ]
  })
  
          
        
        

        await prisma.rol.createMany({
            data: [
                {
                    name: "Administrador",
               },
                {
                    name: "Usuario",
                },
    
            ]
         })

         await prisma.category.createMany({
          data: [
            { title: "Fundas" },
            { title: "Protectores" },
            { title: "Bolsas de regalo" },
            { title: "Cargadores" },
            { title: "Audífonos" },
            { title: "Camisas" },
            { title: "Pantalones" },
            { title: "Sacos" },
            { title: "Anillos" },
            { title: "Collares" },
            { title: "Aretes" },
            { title: "Manillas" },
            { title: "Blusas" },
            { title: "Vestidos" },
            { title: "Sandalias" },
            { title: "Tacos" },
            { title: "Carteras" },
            { title: "Poleras" },
            { title: "Tops" },
            { title: "Calzas" },
            { title: "Shorts" },
            { title: "Mochilas" },
            { title: "Extensiones" },
            { title: "Pelucas" },
            { title: "Fuerza" },
            { title: "Bajar de peso" },
            { title: "Déficit" },
            { title: "Aumentar musculatura" },
            { title: "Calistenia" },
            { title: "Gorros" },
            { title: "Batas sanitarias" },
            { title: "Zapatos clínicos" },
            { title: "Zapatos" },
            { title: "Varon" },
            { title: "Infantil" },
            { title: "Dama" },
            { title: "Tacones" },
            { title: "Anabela" },
            { title: "Grandes" },
            { title: "Pequeñas" },
            { title: "Pantallas interactivas" },
            { title: "Vibradores" },
            { title: "Potenciadores(tabletas)" },
            { title: "Ropa sexy" },
            { title: "Juguetes sexuales" },
            { title: "Chupines" },
            { title: "Campanas" },
            { title: "Clásicos" },
            { title: "Casio" },
            { title: "Maxima" },
            { title: "City sens" },
            { title: "Laguna" },
            { title: "Peluches" },
            { title: "Medias" },
            { title: "Tenis" },
            { title: "Gorras" },
            { title: "Camisas rufini" },
            { title: "Pantalones de vestir" },
            { title: "Pantalones sport" },
            { title: "Pantalones normal" },
            { title: "Pantalones rufini" },
            { title: "Cinturones" },
            { title: "Zapatos de vestir" },
          ]
        });
        
    
    



        
        

       
    return res.status(200).json({message: 'Base de Datos Poblada'});

    }



}
