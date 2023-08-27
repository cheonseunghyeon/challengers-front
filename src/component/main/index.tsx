/** @jsxImportSource @emotion/react */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Banner,
  ClubComponent,
  FlexWrapContainer,
  ProjectBox,
  TextBox,
} from '../emotion/component';
import { Clubs } from '../../json/club-controller';
import { Header1, Inner, Section } from '../emotion/GlobalStyle';
import { ClubList, NavigateMore, DivisionLine, LoadingContainer } from './component';
import { useGetVideosQuery } from '../../store/projectController';
import { ClubLogoProps, ProjectBoxProps } from '../../types/globalType';
import { ApiFetcher } from '../../util/util';
import { useGetLogosQuery } from '../../store/clubController';

const Index = () => {
  const videoResult = useGetVideosQuery({});
  const logoResult = useGetLogosQuery({});

  return (
    <Inner>
      <Banner large />

      <ApiFetcher
        query={logoResult}
        loading={
          <ClubList>
            {Clubs.map((club) => (
              <ClubComponent
                key={club.id}
                name={club.name}
                clubImg={`${process.env.PUBLIC_URL}/img/${club.clubImg}`}
              />
            ))}
          </ClubList>
        }
      >
        {(data) => (
          <Section gap="3.2">
            <Header1>현재 다양한 클럽이 챌린저스에서 활동하고 있어요</Header1>
            <ClubList>
              {data.map((club: ClubLogoProps) => (
                <ClubComponent key={uuidv4()} clubImg={club.logoUrl} />
              ))}
            </ClubList>
          </Section>
        )}
      </ApiFetcher>

      <DivisionLine />

      <Section>
        <TextBox>
          <Header1>붐하고 뜨고 있는 프로젝트</Header1>
          <NavigateMore sort="popular" />
        </TextBox>

        <ApiFetcher query={videoResult} loading={<LoadingContainer />}>
          {(data) => (
            <FlexWrapContainer>
              {data.content.map((project: ProjectBoxProps) => (
                <ProjectBox key={project.id} projectData={project} />
              ))}
            </FlexWrapContainer>
          )}
        </ApiFetcher>
      </Section>

      <Section>
        <TextBox>
          <Header1>최근 등록된 프로젝트</Header1>
          <NavigateMore sort="recent" />
        </TextBox>

        <ApiFetcher query={videoResult} loading={<LoadingContainer />}>
          {(data) => (
            <FlexWrapContainer>
              {data.content.map((project: ProjectBoxProps) => (
                <ProjectBox key={project.id} projectData={project} />
              ))}
            </FlexWrapContainer>
          )}
        </ApiFetcher>
      </Section>
    </Inner>
  );
};

export default Index;
