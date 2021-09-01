import React from "react";
import styles from "./Participant.module.scss";

export default function Participant() {
    return (
      <div className={styles.participantContainer}>
        <div className={styles.participantRow}>
        <div className={styles.participantName}>Gregg the Egg</div>
        </div>
      </div>
    );
  };