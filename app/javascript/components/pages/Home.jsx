import React from 'react';
import { Helmet } from 'react-helmet';
import SharedLayout from 'components/layout/SharedLayout';
import SplashBackground from 'components/icons/SplashBackground';
import Button from 'components/Button';
import PageTitle from 'components/PageTitle';
import PodcastTile from 'components/PodcastTile';
import InfoCard from '../home/InfoCard';

import 'stylesheets/page';
import 'stylesheets/home';

import PodcastImageRubyonRails from 'images/podcast-ruby-on-rails.png';
import PodcastImageRemoteRuby from 'images/podcast-remote-ruby.png';

import JoinOurWelcomingCommunitySection from '../home/JoinOurWelcomingCommunitySection';
import ExceedYourProfessionalGoalsSection from '../home/ExceedYourProfessionalGoalsSection';
import GiveSupportSection from '../home/GiveSupportSection';
import JoinCommunityIcon from 'components/icons/JoinCommunity';
import ExceedGoalsIcon from 'components/icons/ExceedGoals';
import GiveSupportIcon from 'components/icons/GiveSupport';

const podcasts = [
    {
        id: 1,
        tile_image: PodcastImageRubyonRails,
        tile_image_alt: 'Ruby on Rails Podcast',
        title: 'Ruby on Rails Podcast',
        url: 'https://www.therubyonrailspodcast.com/373',
    },
    {
        id: 2,
        tile_image: PodcastImageRemoteRuby,
        tile_image_alt: 'Remote Ruby Podcast',
        title: 'Remote Ruby',
        url: 'https://remoteruby.com/162',
    },
];

const infoCardData = [
    {
        title: 'Join our welcoming community',
        section: <JoinOurWelcomingCommunitySection />,
        icon: JoinCommunityIcon,
    },
    {
        title: 'Exceed your professional goals',
        section: <ExceedYourProfessionalGoalsSection />,
        icon: ExceedGoalsIcon,
    },
    {
        title: 'Give support, and get it in return',
        section: <GiveSupportSection />,
        icon: GiveSupportIcon,
    },
];

const Home = () => (
    <>
        <Helmet>
            <title>WNB.rb</title>
        </Helmet>

        <SharedLayout>
            <section className="hero-container">
                <div className="hero">
                    <PageTitle text="WNB.rb">
                        <p className="mt-3 max-w-[14rem]">
                            A virtual community for women and non-binary Rubyists.
                        </p>
                        <a
                            href="https://tinyurl.com/join-wnb-rb"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Button type="secondary" className="mt-3">
                                Join WNB.rb
                            </Button>
                        </a>
                    </PageTitle>
                    <div className="splash-background">
                        <SplashBackground className="w-full" />
                    </div>
                </div>
            </section>

            <section className="about-us">
                <div className="about-us-content mx-14 py-5">
                    <h3 className="text-2xl font-bold my-2 text-center">About Us</h3>
                    <p>
                        WNB.rb is a virtual community for women and non-binary Ruby developers. It
                        was founded in 2021 by{' '}
                        <a
                            href="https://www.emilysamp.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Emily Samp
                        </a>{' '}
                        and{' '}
                        <a href="https://jemma.dev/" target="_blank" rel="noopener noreferrer">
                            Jemma Issroff
                        </a>{' '}
                        after they noticed the lack of gender diversity among speakers at Ruby
                        conferences and meetups. WNB.rb began with the goal of supporting a more
                        diverse group of people in making an impact on the Ruby community.
                        <br />
                        <br />
                        Since 2021, we have grown into a community of hundreds of technologists,
                        with initiatives including a monthly meetup, book club, interview study
                        group, conference proposal review group, and more!
                        <br />
                        <br />
                        While Jemma and Emily still co-organize WNB.rb, much of the work that keeps
                        the group going is done by our community members, who live all over the
                        world and are passionate about making the Ruby community a safer, more
                        welcoming place.
                    </p>
                </div>
            </section>

            <section className="podcast">
                <PodcastTile podcasts={podcasts} />
            </section>

            <section className="info-card-section mb-12">
                {infoCardData.map((card) => {
                    return (
                        <InfoCard
                            key={card.title}
                            section={card.section}
                            title={card.title}
                            icon={card.icon}
                        ></InfoCard>
                    );
                })}
            </section>
        </SharedLayout>
    </>
);

export default Home;
