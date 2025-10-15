# Football Data API Documentation

Welcome to the Football Data API! This document provides a clear and concise overview of the available endpoints to access football league, season, and match data.

## General Information

**Base URL**: All URLs referenced in this documentation have the following base: `https://football-api-one.vercel.app/`

**Authentication**: No authentication is required for these endpoints.

**HTTP Method**: All endpoints use the GET method.

**Response Format**: All responses are in JSON format.

## Leagues API

This section describes the endpoints used to retrieve information about football leagues and their seasons.

### 1. Get Available Leagues

This endpoint retrieves a list of all available football leagues.

**Endpoint**: `GET /api/leagues`

**Example Response**:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "name": "Premier League",
      "country": "England"
    },
    {
      "id": 2,
      "name": "LaLiga",
      "country": "Spain"
    }
  ]
}
```

### 2. Get League Details

This endpoint retrieves the specific details of a single league using its ID.

**Endpoint**: `GET /api/league/:leagueId`

**Path Parameter**:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `leagueId` | `string` | The unique identifier for the league. |

**Example Response**:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "name": "Premier League",
      "country": "England"
    }
  ]
}
```

### 3. Get League Seasons

This endpoint retrieves all available seasons for a specific league.

**Endpoint**: `GET /api/league/:leagueId/seasons`

**Path Parameter**:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `leagueId` | `string` | The unique identifier for the league. |

**Example Response**:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "league_id": 1,
      "season_id": 1,
      "name": "Premier League 25/26",
      "year_start": 2025
    }
  ]
}
```

### 4. Get Season Details

This endpoint retrieves the details for a specific season within a league.

**Endpoint**: `GET /api/league/:leagueId/season/:seasonId/`

**Path Parameters**:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `leagueId` | `string` | The unique identifier for the league. |
| `seasonId` | `string` | The unique identifier for the season. |

**Example Response**:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "league_id": 1,
      "season_id": 1,
      "name": "Premier League 25/26",
      "year_start": 2025
    }
  ]
}
```

### 5. Get Season Matches

This endpoint retrieves all matches played in a specific season of a league.

**Endpoint**: `GET /api/league/:leagueId/season/:seasonId/matches`

**Path Parameters**:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `leagueId` | `string` | The unique identifier for the league. |
| `seasonId` | `string` | The unique identifier for the season. |

**Example Response**:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "match_id": 2,
      "match_datetime": "2025-08-15T19:00:00+00:00",
      "status": "FINISHED",
      "attendance": 60315,
      "home_formation": "4-2-3-1",
      "away_formation": "4-1-4-1",
      "home_score": 4,
      "away_score": 2,
      "competition": {
        "id": 1,
        "name": "Premier League 25/26"
      },
      "home_team": {
        "id": 1,
        "name": "Liverpool",
        "country": "England"
      },
      "away_team": {
        "id": 7,
        "name": "Bournemouth",
        "country": "England"
      },
      "referee": {
        "id": 1,
        "name": "Anthony Taylor",
        "nationality": "England"
      },
      "venue": {
        "id": 19,
        "city": "Liverpool",
        "name": "Anfield",
        "country": "England",
        "capacity": 61276
      }
    },
    {
      "match_id": 3,
      "match_datetime": "2025-08-16T11:30:00+00:00",
      "status": "FINISHED",
      "attendance": 42526,
      "home_formation": "4-2-3-1",
      "away_formation": "4-3-3",
      "home_score": 0,
      "away_score": 0,
      "competition": {
        "id": 1,
        "name": "Premier League 25/26"
      },
      "home_team": {
        "id": 19,
        "name": "Aston Villa",
        "country": "England"
      },
      "away_team": {
        "id": 17,
        "name": "Newcastle",
        "country": "England"
      },
      "referee": {
        "id": 2,
        "name": "Craig Pawson",
        "nationality": "England"
      },
      "venue": {
        "id": 15,
        "city": "Birmingham",
        "name": "Villa Park",
        "country": "England",
        "capacity": 42640
      }
    },
    {
      "match_id": 4,
      "match_datetime": "2025-08-16T14:00:00+00:00",
      "status": "FINISHED",
      "attendance": 31478,
      "home_formation": "4-2-3-1",
      "away_formation": "4-2-3-1",
      "home_score": 1,
      "away_score": 1,
      "competition": {
        "id": 1,
        "name": "Premier League 25/26"
      },
      "home_team": {
        "id": 11,
        "name": "Brighton",
        "country": "England"
      },
      "away_team": {
        "id": 18,
        "name": "Fulham",
        "country": "England"
      },
      "referee": {
        "id": 3,
        "name": "Samuel Barrott",
        "nationality": "England"
      },
      "venue": {
        "id": 17,
        "city": "Falmer",
        "name": "American Express Stadium",
        "country": "England",
        "capacity": 31876
      }
    }
  ]
}
```

## Match API

This section describes the endpoint for retrieving detailed information about a single match.

### 1. Get Match Details

This endpoint retrieves the full details of a specific match using its ID.

**Endpoint**: `GET /api/match/:matchId`

**Path Parameter**:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `matchId` | `string` | The unique identifier for the match. |

**Example Response**:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "id": 2,
      "competition_id": 1,
      "home_team_id": 1,
      "away_team_id": 7,
      "home_score": 4,
      "away_score": 2,
      "match_datetime": "2025-08-15T19:00:00+00:00",
      "status": "FINISHED",
      "attendance": 60315,
      "home_formation": "4-2-3-1",
      "away_formation": "4-1-4-1",
      "venue_id": 19,
      "referee_id": 1
    }
  ]
}

```
