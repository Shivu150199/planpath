import React from 'react'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import SingleCourse from '../components/SingleCourse'
import { Tabs } from 'antd'
import CourseInfo from '../components/CourseInfo'
import CourseDesc from '../components/CourseDesc'
import UserReview from '../components/UserReview'

const AboutCourse = () => {
  const items = [
    {
      key: '1',
      label: 'Course Info',
      children: <CourseInfo/>,
    },
    {
      key: '2',
      label: 'Course Description',
      children: <CourseDesc/>,
    },
    {
      key: '3',
      label: 'User Review',
      children:<UserReview/>,
    },
    {
      key: '4',
      label: 'Question & Answer',
      children: "question",
    },
  ];
const onChange = (key) => {
    console.log(key);
  };

  return (
    <section className='px-6 -z-10'>
        <Navigation/>
        <div>
          <SingleCourse/>
        </div>
        <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange}  />
        </div>
    
    </section>
  )
}

export default AboutCourse