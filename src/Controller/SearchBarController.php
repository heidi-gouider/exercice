<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SearchBarController extends AbstractController
{
    #[Route('/search/bar', name: 'app_search_bar')]
    public function index(): Response
    {
        return $this->render('app2/index.html.twig', [
            'controller_name' => 'SearchBarController',
        ]);
    }
}
