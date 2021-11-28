import { Province } from "./models/Province"
import { Region } from "./models/Region"
import { District } from "./models/District"
import { Commune } from "./models/Commune"
import { Fokontany } from "./models/Fokontany"

import provinces from "./data/provinces"
import regions from "./data/regions"
import districts from "./data/districts"
import communes from "./data/communes"
import fokontany from "./data/fokontany"

require('dotenv/config')

const mongoose = require('mongoose')

function addProvinces() {
    return new Promise((resolve, reject) => {
        provinces.forEach((province, index, array) => {
            Province.findByIdAndUpdate(province._id, province, { upsert: true }, (err) => {
                if (err) {
                    reject(err);
                }
            });
            if (index === array.length -1) resolve("Add provinces done.");
        });
    })
}
 
function addRegions() {
    return new Promise((resolve, reject) => {
        regions.forEach((region, index, array) => {
            Region.findByIdAndUpdate(region._id, region, { upsert: true }, (err) => {
                if (err) {
                    reject(err);
                }
            });
            if (index === array.length -1) resolve("Add regions done.");
        });
    });
}
 
function addDistricts() {
    return new Promise((resolve, reject) => {
        districts.forEach((district, index, array) => {
            District.findByIdAndUpdate(district._id, district, { upsert: true }, (err) => {
                if (err) {
                    reject(err)
                }
            });
            if (index === array.length -1) resolve("Add districts done.");
        })
    })
}
 
function addCommunes() {
    return new Promise((resolve, reject) => {
        communes.forEach((commune, index, array) => {
            Commune.findByIdAndUpdate(commune._id, commune, { upsert: true }, (err) => {
                if (err) {
                    reject(err)
                }
            });
            if (index === array.length -1) resolve("Add communes done.");
        })
    })
}
 
function addFokontanys() {
    return new Promise((resolve, reject) => {
        fokontany.forEach((fk, index, array) => {
            Fokontany.findByIdAndUpdate(fk._id, fk, { upsert: true }, (err) => {
                if (err) {
                    reject(err)
                }
            });
            if (index === array.length -1) resolve("Add fokontany done.");
        })
    })
}

mongoose.connect(
    process.env.CONNECTION_DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true 
    },
).then(
    () => {
        console.log("Connected to MongoDB Database")
        console.log("Populating database...")
        addProvinces()
            .then(() => addRegions()
                .then(() => addDistricts()
                    .then(() => addCommunes()
                        .then(() => addFokontanys()
                            .then(() => {
                                console.log("Job Done.");
                                mongoose.connection.close()
                            })
                        )
                    )
                )
            )
    })