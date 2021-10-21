import { useState } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistic from 'components/Statistic/Statistic';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function Feedback() {
  // const keys = Object.keys(this.state);
  // const [keys, setKeys] = useState('');

  const [good, setGood] = useState('0');
  const [neutral, setNeutral] = useState('0');
  const [bad, setBad] = useState('0');

  // console.log(neutral);

  const onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={keys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {Number.isNaN(this.countPositiveFeedbackPercentage()) ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistic
          // good={this.state.good}
          // neutral={this.state.neutral}
          // bad={this.state.bad}
          // total={this.countTotalFeedback()}
          // positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = feedback => {
//     this.setState(prevState => ({
//       [feedback]: prevState[feedback] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (
//       Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10
//     );
//   };

//   render() {
//     const keys = Object.keys(this.state);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {Number.isNaN(this.countPositiveFeedbackPercentage()) ? (
//             <Notification message="No feedback given"></Notification>
//           ) : (
//             <Statistic
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default Feedback;
