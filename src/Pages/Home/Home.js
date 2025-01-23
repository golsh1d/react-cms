import React from 'react'
import "./Home.css"
import Features from '../../Components/Features/Features'
import Chart from '../../Components/Chart/Chart'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'

export default function Home() {
  return (
    <>
      <Features/>
      <Chart/>
      <div className="widgets-container">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </>
  )
}