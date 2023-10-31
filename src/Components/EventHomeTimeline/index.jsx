import { TicketPerforated } from 'react-bootstrap-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import PropsType from 'prop-types';
import './styles.scss';

export default function EventHomeTimeline(props) {
    return (
        <>
            <div className='timelineContainer'>
                <h2>Full Pass Purchase Timeline</h2>
                <VerticalTimeline layout="2-columns" lineColor="gray">
                {
                        props.timeline.map((card, index) => {
                            return (
                                <div key={index}>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date="2011 - present"
                                    position={card.position}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<TicketPerforated />}
                                >
                                    <h3 className="vertical-timeline-element-title">Full Pass for {card.age}s</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{card.type}</h4>
                                    <p>${card.price}</p>
                                </VerticalTimelineElement>
                                </div>
                            )})
                    }
                </VerticalTimeline>
            </div>
        </>
    )
}

EventHomeTimeline.propTypes = {
    timeline: PropsType.array
}