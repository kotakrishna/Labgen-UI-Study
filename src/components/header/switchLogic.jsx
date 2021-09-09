import { Breadcrumbs, makeStyles, Typography ,createStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import SecondSlider from '../SecondSilder';
import ClientDictionarySlider from '../SecondSilder/InnerSlider/SystemDictionary/ClientDictionarySlider';
import RequistionSlider from '../SecondSilder/RequistionSlider';
import SystemDictionary from '../SecondSilder/SystemDictionary';



const useStyles = makeStyles((theme) =>
  createStyles({
    Breadcrumb:{
      backgroundColor:'#ffffff',
      padding:'20px'
    }
  }));

function Breadcrumb({handleTabChange,firstTitle,secondTitle,mainTitle}) {
    const classes = useStyles();
    return (
        
        <Breadcrumbs className={classes.Breadcrumb} separator="›"  aria-label="breadcrumb">
        <Typography  variant="subtitle2" onClick={(e)=>handleTabChange()} color="textPrimary" >
        {firstTitle}
        </Typography>
        {
            secondTitle?
        <Typography variant="subtitle2"  color="textPrimary">
          {secondTitle}
        </Typography>:null
        }
        {
            mainTitle?
        <Typography variant="subtitle2"  color="textPrimary">{mainTitle}</Typography>:null
        }
        </Breadcrumbs>
    )
}


export default function SwitchLogic({checkValue,handleTabChange}) {
    switch (checkValue) {
        case 0:
            return (
                <>
                <Breadcrumb firstTitle="Requisition" secondTitle="" mainTitle="" handleTabChange={handleTabChange} />
            <RequistionSlider />
                </>
            )
            break;
            case 8:
                return (
                    <>
                    <Breadcrumb firstTitle="System dictionary" secondTitle="" mainTitle="" handleTabChange={handleTabChange}/>
            <SystemDictionary handleTabChange={handleTabChange} />
                </>
            )
            break;
            
            case 121:
                return (
                    <>
                    <Breadcrumb firstTitle="System dictionary" secondTitle="Client Dictionary" mainTitle="" handleTabChange={handleTabChange} />
            <ClientDictionarySlider />
                </>
            )
            break;
    
        default:
            return (
    <div>
            data
        </div>
    )
    break;
}
    
}
