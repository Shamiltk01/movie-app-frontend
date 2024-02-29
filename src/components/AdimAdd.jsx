import React from 'react'
import Navi from './Navi'
import { useState } from 'react'

const AdimAdd = () => {
    const [input,setInput] = new useState(
        {
            "movie":"",
            "duration":"",
            "language":"",
            "actor":"",
            "actress":"",
            "director":"",
            "date":"",
            "poster1":"",
            "trailer":"",
            "poster2":"",
            "description":""
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        if (input.movie && input.duration && input.actor && input.actress && input.date && input.description && input.director && input.language && input.poster1 && input.poster2 && input.trailer !=setInput({
        "movie":"",
            "duration":"",
            "language":"",
            "actor":"",
            "actress":"",
            "director":"",
            "date":"",
            "poster1":"",
            "trailer":"",
            "poster2":"",
            "description":""
        })) {
            alert("Successfully submitted")
        } else {
            alert("Something went wrong")
        }
    }
  return (
    <div>
        <Navi/>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Movie Name</label>
                        <input type="text" className="form-control" value={input.movie} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Duration</label>
                        <input type="text" className="form-control" value={input.duration} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Language</label>
                        <input type="text" className="form-control" value={input.language} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Actor Name</label>
                        <input type="text" className="form-control" value={input.actor} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Actress Name</label>
                        <input type="text" className="form-control" value={input.actress} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Director Name</label>
                        <input type="text" className="form-control" value={input.director} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <lebal className="form-label colored-label">Movie Date</lebal>
                        <input type="date" name="" id="" className="form-control" value={input.date} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Poster 1</label>
                        <input type="file" name="" id="" className="form-control" value={input.poster1} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Trailer link</label>
                        <input type="file" name="" id="" className="form-control" value={input.trailer} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Poster 2</label>
                        <input type="file" name="" id="" className="form-control" value={input.poster2} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label colored-label">Description</label>
                        <input type="text" className="form-control spaced-input" value={input.description} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdimAdd