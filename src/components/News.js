import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
 
  articles =[
    {
    "source": { "id": null, "name": "BBC News" },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Hajj: Price rises making pilgrimage increasingly unaffordable - BBC",
    "description": "The pilgrimage to Mecca is becoming increasingly unaffordable for many Muslims across the world.",
    "url": "https://www.bbc.com/news/world-middle-east-66040873",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1321A/production/_130226387_mediaitem130226386.jpg",
    "publishedAt": "2023-06-28T09:32:39Z",
    "content": "Some 1.8 million Muslims from across the world made it to Mount Arafat in Saudi Arabia on Tuesday to mark the most important day of the Hajj. But due to global price rises, the pilgrimage is becoming… [+4512 chars]"
  },
  {
    "source": { "id": null, "name": "WABC-TV" },
    "author": null,
    "title": "Travel woes worsen for passengers stranded at NYC-area airports due to cancelled flights - WABC-TV",
    "description": "Hundreds of flights are already canceled as of early Wednesday morning.",
    "url": "https://abc7ny.com/flight-cancellations-lga-newark-airport-jfk/13435476/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/13435536_062823-wabc-flight-img.jpg?w=1600",
    "publishedAt": "2023-06-28T09:11:15Z",
    "content": "EAST ELMHURST, Queens (WABC) -- Hundreds of flights have already been cancelled as of early Wednesday morning, leaving thousands of travelers stranded and frustrated at local airports.\r\nNewark Airpor… [+3228 chars]"
  },
  {
    "source": { "id": "cnn", "name": "CNN" },
    "author": "",
    "title": "Watch: Violence breaks out after video shows Paris traffic stop turning fatal - CNN",
    "description": "French authorities are investigating the fatal police shooting of a 17-year-old teenager during a traffic stop near Paris. Videos of the incident have since emerged online. One of the two police officers involved in the incident is in custody on suspicion of …",
    "url": "https://www.cnn.com/videos/world/2023/06/28/teenager-shot-paris-police-traffic-stop-intl-ldn-vpx.cnn",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230628094527-paris-teen-demo-vpx.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-06-28T09:00:09Z",
    "content": null
  },
  {
    "source": { "id": "usa-today", "name": "USA Today" },
    "author": "Kayla Jimenez",
    "title": "Florida Gov. Ron DeSantis' feud with Disney World, explained - USA TODAY",
    "description": "Gov. DeSantis's attorneys wrote that the federal court should dismiss a lawsuit in part because \"all of Disney’s claims fail as a matter of law.\"",
    "url": "https://www.usatoday.com/story/news/nation/2023/06/28/florida-gov-ron-desantis-legal-feud-with-disney-world-explained/70361872007/",
    "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/06/21/USAT/d48e1fef-c716-47f9-b674-23d1f42a14db-AP_Election_2024_DeSantis_2.jpg?crop=5567,3132,x0,y283&width=3200&height=1801&format=pjpg&auto=webp",
    "publishedAt": "2023-06-28T08:56:45Z",
    "content": "Florida Gov. Ron DeSantis wants out of his legal battle with Disney, according to court records filed by his attorneys this week.\r\nThe mass media company in April slapped the Republican presidential … [+5051 chars]"
  },
  {
    "source": { "id": null, "name": "MarketWatch" },
    "author": "Jamie Chisholm",
    "title": "Stock futures fall as report of fresh chips-to-China-ban hits Nvidia, others. - MarketWatch",
    "description": "Nasdaq futures were leading early declines following a report that the Biden administration is considering a new ban on sales of AI chips to China.",
    "url": "https://www.marketwatch.com/story/u-s-stock-futures-fall-after-report-of-fresh-chips-to-china-ban-hits-nvidia-and-other-ai-players-5940863d",
    "urlToImage": "https://images.mktw.net/im-808323/social",
    "publishedAt": "2023-06-28T08:39:00Z",
    "content": "U.S. stock futures dipped on Wednesday, led by technology, as chip stocks retreated on reports Washington will issue a new ban on exports to China. On Tuesday, the Dow Jones Industrial Average \r\n DJI… [+2698 chars]"
  },
  {
    "source": { "id": null, "name": "SciTechDaily" },
    "author": null,
    "title": "Intermittent Fasting vs. Calorie Counting: What Is Best for Weight Loss According to Science - SciTechDaily",
    "description": "A study by the University of Illinois Chicago found that time-restricted eating (intermittent fasting) led to similar weight loss and improved insulin sensitivity as traditional calorie restriction among adults with obesity. Participants in the time-restricte…",
    "url": "https://scitechdaily.com/?p=288129",
    "urlToImage": "https://scitechdaily.com/images/Diet-Weight-Loss-Failure-Success.jpg",
    "publishedAt": "2023-06-28T08:33:24Z",
    "content": "ByAmerican College of PhysiciansJune 28, 2023\r\nA randomized controlled trial conducted by researchers at the University of Illinois Chicago revealed that time-restricted eating (intermittent fasting)… [+4889 chars]"
  }
]
constructor(){
  super();
  this.state ={
    articles:this.articles,
    loading :false
  }
}
  render() {
    return (
      <div className='container'>
        <h1 className='my-3'>News Monkey - Get daily news</h1>
        <div className="row ">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4 my-3" key ={element.url}>
        <NewsItems title={element.title.slice(0,60)+"...."} description={element.description.slice(0,75)+"...."} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          
        })}
        </div>
      </div>
    )
  }
}

export default News
