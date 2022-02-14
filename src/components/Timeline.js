import './Timeline.css'

const timelineItems = [
    {
        'header': 'Present',
        'text': 'In January 2022 I was promoted to Development Manager at Neostella. I oversee our global development team operations that includes automation and custom software development practices. In my free time I focus on expanding my learning into other areas such as front-end development using ReactJS to help me be more agile in my day-to-day management work.'
    },
    {
        'header': 'May 2021',
        'text': 'During this time I was promoted to Development Team Lead at Neostella. This was my first introduction to truly leading development teams and came as an opportunity due to our rapidly growing team. In the coming month, we were planning to bring on fifteen new RPA developers located in Medellin, Antioquia, Colombia. This would only be the start of our continued focus to grow our Colombian office.'
    },
    {
        'header': 'February 2021',
        'text': 'Although still new to Neostella, due to staffing changes and needs I was promoted to Senior RPA Developer to help support our Cebu City, Phillipines office of RPA developers. In this position I was focused on building Solution Architecture documentation to guide development, performing code reviews, creating and documenting new standard practices, and helping out with development along the way. '
    },
    {
        'header': 'November 2020',
        'text': 'This month would mark the end of my time at Kiewit and the beginning of my career at Neostella. Although joining a startup felt like a major risk at the time, I was excited to take the leap and start a new journey. Neostella brought me on as an RPA developer to focus on implementing UiPath\'s Test Suite features for a large client. Little did I know what this opportunity would blossom into.'
    },
    {
        'header': 'August 2020',
        'text': 'In the midst of the pandemic and working remotely, I took the opportunity to move to Austin, Texas with the goal of eventually going back to school. Although my story didn\'t quite pan out that way, moving to Austin still proved to be a good move and forced me to get out of my comfort zone.'
    },
    {
        'header': 'May 2020',
        'text': 'I was finally promoted to a full-time RPA developer at Kiewit. This would be the first exciting milestone of my software development career and my first official development position. Although I felt like I had proven myself during my internship, I knew I still had a very long ways to go in my learning journey. With things looking up, I decided to take a step away from school to focus completely on my career. Although met with lots of judgement and uncertainty on this decision, it proved best for my situation.'
    },
    {
        'header': 'June 2019',
        'text': 'After countless searching and applications, I landed my first software development internship as an RPA developer at Kiewit. Although I didn\'t fully understand what RPA was at the time, this proved to be a great entry level position. This is because I was able to learn the tool and be effective very quickly. This gave me the confidence early on to fearlessly jump into projects and learn as much as possible which really allowed me to excel and prove myself to my managers and peers.'
    },
    {
        'header': 'May 2019',
        'text': 'After countless searching and applications, I landed my first software development internship as an RPA developer at Kiewit. Although I didn\'t fully understand what RPA was at the time, this proved to be a great entry level position. This is because I was able to learn the tool and be effective very quickly. This gave me the confidence early on to fearlessly jump into projects and learn as much as possible which really allowed me to excel and prove myself to my managers and peers.'
    },
    {
        'header': 'August 2019',
        'text': 'After countless searching and applications, I landed my first software development internship as an RPA developer at Kiewit. Although I didn\'t fully understand what RPA was at the time, this proved to be a great entry level position. This is because I was able to learn the tool and be effective very quickly. This gave me the confidence early on to fearlessly jump into projects and learn as much as possible which really allowed me to excel and prove myself to my managers and peers.'
    }
]

const Timeline = () => {

    return (
        <div className='timeline-container'>

            <div className='timeline-items-container'>
                {
                    timelineItems.map((item, i) =>
                        <div key={'timeline-item-' + i} className='timeline-item'>
                            <div className='timeline-bar-container'>
                                <div className='timeline-item-dot'></div>
                                <div className='timeline-bar'></div>
                            </div>
                            <div className='timeline-item-text'>
                                <h1 className='timeline-header'>{item.header}</h1>
                                <p className='timeline-subtext'>{item.text}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Timeline;
