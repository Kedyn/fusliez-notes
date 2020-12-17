# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Released]

### [v1.0.0-beta.0] - 12/17/2020

First major pre-release. Code refactoring.

#### Added

- Dynamic sections
- French translation
- Analytics disclaimer
- Unused section by default
- Czech translation
- Malagasy translation

#### Fixed

- Initial settings data
- Color menu
- Map player icons size
- Input bleeding into icon
- NAN problem with scores
- Remembering positions on mobile

#### Removed

- Unused components
- Unused images
- Inline styling from maps

#### Changed

- Map images
- Button component

### [v0.10.1] - 10/16/2020

#### Added

- Persian translation
- Polish translation

#### Changed

- Switched to redux
- Reverted back to save session data

### [v0.10.0] - 10/13/2020

New UI revamp from chilblane. Improves not only visually, but also mobile support.
And migrated from parcel to webpack. Restructure most components.

#### Added

- Added feature to enable read-only/editing mode for player colours and names
- Added translation to de-DE
- About button
- Changelog button
- Colorblind mode

#### Fixed

- No longer shows weird mouse icon while dragging player
- UI

#### Removed

- Themes Settings
- Scores display type

#### Changed

- Innocent to Crewmate
- Parcel to webpack
- Player images

### [v0.9.1] - 10/07/2020

#### Added

- Added translation to pt-BR

#### Fixed

- Reset buttons

### [v0.9.0] - 10/06/2020

This released focused on improving the mobile experience and adding support to
change colors.
There was also a big refactoring for all the code base.

#### Added

- Added support for mobile devices in portrait and landscape
- Added circular progress bars
- Added support to change all theme colors
- Added support for multiple languages
- Added support to switch between circular bars to regular bars

#### Fixed

- Fixed performance issues with notes
- Fixed "Show Player Names" settings bug
- Fixed UI

#### Changed

- Changed win rate progress bars to circular

#### Removed

- Data, players positions and games no longer gets saved.

### [v0.8.3]

#### Added

- Focus on next input element when pressing Enter
- Better support for multiple screens

### [v0.8.2] - 9/25/2020

#### Added

- Draggable players on Map
- Button to reset players on map

### [v0.8.1] - 9/25/2020

#### Fixed

- Minor fix on theme danger button

### [v0.8.0] - 9/24/2020

Switched to Kevin Han's (@khany) UI design.

#### Added

- Separate Scores for impostors and innocents.
- Color change menu for players
- Reset Scores
- Reset Round (players positions)
- Reset all button, resets to default.
- Reset Notes
- Settings Modal
- Recovery Notes Modal
- Changelog Modal

#### Fixed

- Player background color contrast

#### Changed

- Use names to the settings modal.

#### Removed

- Light theme
- Draggable map characters

### [v0.7.0] - 9/15/2020

Code refactoring / project restructuring.

Removed bootstrap dependencies, added JSS.

#### Added

- Configuration data saved on localStorage.
- Visible version and date.

#### Changed

- Players can only be dragged by clicking and hold on the image not the input.
- Player background color changes as soon as a character is inputted on the field.
- Mouse is changed when is by a character map.

#### Fixed

- Player background color visible when names not being used.
- Map characters no longer have to be double clicked to be dropped.

### [v0.6.0] - 9/12/2020

#### Added

- Player color background

### [v0.5.0] - 9/11/2020

Project revamp, switch from static files to react project.

#### Added

- Themes (light/dark)
- Notes section
- Maps section
- Opacity to players with no name
- Editable title
- Editable score

### [v0.4.0] - 9/11/2020

#### Fixed

- UI

### [v0.3.0] - 9/10/2020

#### Added

- Names

### [v0.2.0] - 9/9/2020

Project fusliez notes begins, prototype release.

Features included draggable players and progress bar for score.

## [Unreleased]

### [vX.X.X] - X/X/X

Next update changes will go here.

### [v0.1.0] - 8/24/2020

fuslie adds notepad ftw on the stream
