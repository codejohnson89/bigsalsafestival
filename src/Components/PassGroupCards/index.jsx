import PropTypes from 'prop-types';
import './styles.scss';
import { TicketPerforated } from 'react-bootstrap-icons';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function PassGroupCards (props) {
    return (
        <>
            <VerticalTimeline layout="2-columns" lineColor="gray">
                {
                    props.data.map((card, index) => {
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
                                <h3 className="vertical-timeline-element-title">Performer Pass for {card.age}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{card.type}</h4>
                                <p>${card.price}</p>
                            </VerticalTimelineElement>
                            </div>
                        )})
                }
            
            </VerticalTimeline>
        </>
    )
}

PassGroupCards.propTypes = {
    data: PropTypes.array.isRequired
}