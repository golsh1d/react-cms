import React from 'react'
import "./Features.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
    <div className="features">
        <div className="features-item">
            <div className="features-title">Revanue</div>
            <div className="features-container">
                <span className="features-price">$2,415</span>
                <span className="features-rate">
                    -11
                    <ArrowDownwardIcon className="features-icon negative"/>
                </span>
            </div>
            <div className="features-des">
                Compared To Last Month
            </div>
        </div>
        <div className="features-item">
            <div className="features-title">Sales</div>
            <div className="features-container">
                <span className="features-price">$4,415</span>
                <span className="features-rate">
                    -1,14
                    <ArrowDownwardIcon className="features-icon negative"/>
                </span>
            </div>
            <div className="features-des">
                Compared To Last Month
            </div>
        </div>
        <div className="features-item">
            <div className="features-title">Cost</div>
            <div className="features-container">
                <span className="features-price">$2,225</span>
                <span className="features-rate">
                    +2,14
                    <ArrowUpwardIcon className="features-icon positive"/>
                </span>
            </div>
            <div className="features-des">
                Compared To Last Month
            </div>
        </div>
    </div>
  )
}