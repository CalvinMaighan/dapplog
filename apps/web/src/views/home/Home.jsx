import React, { useRef } from 'react';
import {
  _home,
  _title,
  _phases,
  _first,
  _second,
  _third,
  _projects,
  _item,
  _container,
  _laddercaster,
  _basketswap,
  _theone,
  _avala,
  _right,
  _left,
  _bottom,
  _side,
  _hero,
  _hook,
  _text,
  _subtext,
} from './Home.styled';
import { useSize } from 'core/hooks/useSize';

const Home = () => {
  const phase_ref = useRef();
  const { width } = useSize(phase_ref);
  console.log(width);

  return (
    <_home>
      <_hero>
        <_hook $width={width}>
          <_text>
            <span>Dapplog.</span>
          </_text>
          <_subtext>
            <span>Building truly decentralized apps for real people.</span>
          </_subtext>
        </_hook>
        <_phases ref={phase_ref}>
          <_first>
            <_container>
              <_title>Phase 1</_title>
              <_item>Idea</_item>
              <_item>Interactive Design</_item>
              <_item $last>Community Feedback</_item>
            </_container>
            <_right>
              <_side $right />
            </_right>
          </_first>
          <_second>
            <_container>
              <_title>Phase 2</_title>
              <_item>Development</_item>
              <_item>Demo on Testnet</_item>
              <_item $last>Community Testing</_item>
            </_container>
            <_bottom>
              <_side $bottom />
            </_bottom>
          </_second>
          <_third>
            <_left>
              <_side $left />
            </_left>
            <_container>
              <_title>Phase 3</_title>
              <_item>Launch</_item>
              <_item>Governance</_item>
              <_item $last>Community DAO</_item>
            </_container>
          </_third>
        </_phases>
      </_hero>
      <_projects>
        <_laddercaster></_laddercaster>
        <_basketswap></_basketswap>
        <_theone></_theone>
        <_avala></_avala>
      </_projects>
    </_home>
  );
};

export default Home;
