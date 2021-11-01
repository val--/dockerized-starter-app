<?php
declare(strict_types=1);

namespace App\Controller;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\JsonResponse;

class HealthCheckController extends AbstractFOSRestController
{
    /**
     *
     * @Get("/healthCheck", name="get_health_check")
     */
    public function getHealthCheck()
    {
        return new JsonResponse([
            [
                'id' => 1,
                'status' => "Alive !",
                'code' => 200,
                'date' => '2021-11-03 10:30:34'
            ],
            [
                'id' => 2,
                'status' => "KO",
                'code' => 500,
                'date' => '2021-12-03 22:01:11'
            ],
        ]);
    }
}
