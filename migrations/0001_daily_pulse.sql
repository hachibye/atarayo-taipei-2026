CREATE TABLE IF NOT EXISTS daily_votes (
  taipei_date TEXT NOT NULL,
  voter_hash TEXT NOT NULL,
  song_title TEXT NOT NULL,
  mood_id TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (taipei_date, voter_hash)
) WITHOUT ROWID;

CREATE INDEX IF NOT EXISTS daily_votes_song
  ON daily_votes (taipei_date, song_title);

CREATE INDEX IF NOT EXISTS daily_votes_mood
  ON daily_votes (taipei_date, mood_id);
