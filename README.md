# sample-cast

### Goals

     Build two webpages: one for a single episode of a podcast and one to edit
     that episode.
     The episode page should include relevant information about the episode,
     including the episode title, artwork, description, date published,
     etc. as well as a link to edit the episode. The fields for the title, artwork, description, etc.
     should all be editable.

     The episode webpage should include an audio player that allows users to see the episode playback progress
     as well as buttons to play, pause, skip ahead, and skip back. When editing the episode, the web player should
     still be visible and continue playing the episode.

1.  API is routed through a proxy [Simple-Cast-API](https://github.com/jtomchak/sample-cast-api) available at this URL: https://sample-cast-api.herokuapp.com
    - The source API did not have cors enabled, was not able to get access from in the Browser domain.
    - Solution was to create a proxy API, and make needed request through it.
    - Offers get show, get episodes of show, get show details, and patch show details
2.  Create a master-detail SPA to see a list of episodes, and select an individual episode's details
3.  From the details view, be able to edit that particular episodes information. Beable to save or cancel
4.  From details view, be able to select 'play' and have it load in the above player.
5.  While playing an episode, be able to view details of other episodes **AND** edit those details without effecting the playback.
6.  Mobile, should hit details section on mobile.

    - TODO: When episode is selected the route updates. Show/Hide detail view based on route. Add slide animation back and forth while transitioning from details to list.
    - TODO: Details on mobile needs a back button that will take the user 'back' to the listview. Behaves like browser back.

7.  TODO: Player back/forward buttons need to get the current time of the player via audio ref and adjust it by 15/30 seconds and continue playing.
