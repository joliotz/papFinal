const srcLocation = require("../../../srcLocation");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const userAuthentication = require("../../userAuthentication");

const bcryptjs = require("bcryptjs");

const dbConnection = require("../../dbconnection");

router.post(`/register`,(req,res)=>{

    dbConnection.query(`SELECT COUNT(user.email) AS contagem FROM user WHERE user.email = ?`,
    [req.body.email],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result[0].contagem == 0){
            dbConnection.query("INSERT INTO user (username, password, email, level) VALUES (?,?,?,?)",

            [req.body.username,
            bcryptjs.hashSync(escape(req.body.password,bcryptjs.genSaltSync(2))),
            req.body.email,
            "regular"],

            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(406).send("Erro na introdução");
                    
                }
                else{
                      dbConnection.query(
                        'UPDATE user SET public_key = ?, private_key = ? WHERE userid = ?',
                        [Math.random().toString(36).substring(2) + result.insertId, Math.random().toString(36).substring(2) + result.insertId, result.insertId],
                        (error,result)=>{
                          if (error) throw error
                    });
                res.status(200).send()
                };
          });
        }
        else{
            res.status(406).send("Já existe uma conta com esse email!")
        }
    }
    })
});

router.post("/login", userAuthentication.login)

router.post("/getAuth", userAuthentication.getLevel)

module.exports = router;
