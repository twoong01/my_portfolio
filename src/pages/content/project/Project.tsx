import { useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import ProjectCard from '../../../components/cards/ProjectCard';
import { projectData } from '../../../data/content/projectData';
import { projectDetailData } from '../../../data/content/projectDetailData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { RootState } from '../../../store';
import ScrollAni from '../../../styles/ScrollAni';
import { TabsPropsT } from '../../../types/type';
import ProjectDetail from '../../detail/ProjectDetail';

export const ProjectComponent = tw.article`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  pt-[3rem]
  h-auto

  max-md:grid-cols-1
  max-md:pt-[5rem]
  max-lg:grid-cols-2
  max-xl:grid-cols-3  
  max-2xl:grid-cols-4
`;

function Project({ id, navTabs }: TabsPropsT) {
  const isModal = useSelector((state: RootState) => state.overlay.isOpen);
  const { scrollRef, scrollEl } = useScrollAnimation();

  return (
    <>
      {isModal &&
        projectDetailData.map((item, idx) => (
          <ProjectDetail
            key={idx}
            name={item.name}
            pointcolor={item.pointcolor}
            title={item.title}
            subtext={item.subtext}
            data={item.data}
            team={item.team}
            tag={item.tag}
            imgurl={item.imgurl}
            detailimginfo={item.detailimginfo}
            giturl={item.giturl}
            depoloyurl={item.depoloyurl}
            tools={item.tools}
            featinfo={item.featinfo}
            parts={item.parts}
          />
        ))}

      <ScrollAni
        className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`}
        ref={scrollRef}
      >
        <ProjectComponent id={id} ref={navTabs[0].targetRef}>
          {projectData.map((item, idx) => (
            <ProjectCard
              key={idx}
              name={item.name}
              title={item.title}
              subject={item.subject}
              tag={item.tag}
              imgurl={item.imgurl}
              giturl={item.giturl}
              depoloyurl={item.depoloyurl}
            />
          ))}
        </ProjectComponent>
      </ScrollAni>
    </>
  );
}

export default Project;
