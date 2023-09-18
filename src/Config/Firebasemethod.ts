import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "./Firebaseconfig";
import { resolve } from "path";


let auth = getAuth(app)
let db = getDatabase(app)


export let fbLogin = (body: any) => {
    return new Promise((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("Email and Password is Required")
        }
        else {
            signInWithEmailAndPassword(auth, body.email, body.password)
                .then(res => {
                    let id = res.user.uid

                    const referece = ref(db, `users/${id}`)
                    onValue(referece, (data)=> {
    if (data.exists()) {
        resolve(data.val())
    }
else{
    reject("No Data")
}
})
            }).catch(err => {
    reject(err)
})
}
    }
    )
}

export let fbSigup = (body: any) => {
    return new Promise((resolve, reject) => {
        if (!body.email || !body.password) {
            reject("Email and Password is Required")
        } else {
            createUserWithEmailAndPassword(auth, body.email, body.password).then(res => {
                let id = res.user.uid

                body.id = id
                const referece = ref(db, `users/${id}`)
                set(referece, body).then(user => {
                    resolve("User Created Succefully")
                }).catch(error => {
                    reject(error)
                })

            }).catch(err => {
                reject(err)
            })
        }
    })


}
